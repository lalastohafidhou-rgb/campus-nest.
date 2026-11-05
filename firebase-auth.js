(() => {
  const toast = document.getElementById("toast");
  let toastTimer;

  function showAuthMessage(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
  }

  function getAuth() {
    const config = window.CAMPUSNEST_FIREBASE_CONFIG;
    const requiredFields = ["apiKey", "authDomain", "projectId", "appId"];
    const isMissing = !config || requiredFields.some(field => {
      const value = config[field];
      return typeof value !== "string" || !value.trim() || value.startsWith("YOUR_");
    });

    if (isMissing) {
      const error = new Error("Add your Firebase web app settings to firebase-config.js before signing in.");
      error.code = "campusnest/configuration";
      throw error;
    }

    if (!window.firebase?.auth || !window.firebase?.initializeApp) {
      throw new Error("Firebase could not load. Check your internet connection and reload the page.");
    }

    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config);
    }

    return window.firebase.auth();
  }

  function describeAuthError(error, provider) {
    const providerName = provider || "email";
    switch (error.code) {
      case "campusnest/configuration":
        return error.message;
      case "auth/popup-closed-by-user":
        return "Sign-in was cancelled. Try again when you're ready.";
      case "auth/popup-blocked":
        return "Your browser blocked the sign-in window. Allow pop-ups and try again.";
      case "auth/unauthorized-domain":
        return "This site is not authorized yet. Add its domain in Firebase Authentication settings.";
      case "auth/operation-not-allowed":
        return `Enable ${providerName} sign-in in Firebase Authentication to use this option.`;
      case "auth/account-exists-with-different-credential":
        return "An account with this email already uses another sign-in method. Sign in with that method first.";
      case "auth/email-already-in-use":
        return "An account already uses this email. Try signing in instead.";
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
        return "That email and password combination wasn't recognized.";
      case "auth/weak-password":
        return "Choose a stronger password with at least eight characters.";
      case "auth/invalid-email":
        return "Enter a valid email address and try again.";
      case "auth/network-request-failed":
        return "We couldn't reach Firebase. Check your connection and try again.";
      default:
        console.error("CampusNest Firebase authentication error:", error);
        return error.message || "Sign-in could not be completed. Please try again.";
    }
  }

  function completeSignIn(role) {
    window.dispatchEvent(new CustomEvent("campusnest:auth-success", {
      detail: { role }
    }));
  }

  async function handleProviderSignIn(button) {
    const providerName = button.dataset.provider;
    const isRegistration = Boolean(button.closest("#auth-register"));
    const role = isRegistration
      ? document.querySelector("#register-form select").value
      : "Student";

    button.disabled = true;
    try {
      const auth = getAuth();
      const provider = providerName === "Google"
        ? new window.firebase.auth.GoogleAuthProvider()
        : new window.firebase.auth.OAuthProvider("apple.com");

      if (providerName === "Google") {
        provider.setCustomParameters({ prompt: "select_account" });
      } else {
        provider.addScope("email");
        provider.addScope("name");
      }

      const result = await auth.signInWithPopup(provider);
      completeSignIn(isRegistration && result.additionalUserInfo?.isNewUser ? role : "Student");
    } catch (error) {
      showAuthMessage(describeAuthError(error, providerName));
    } finally {
      button.disabled = false;
    }
  }

  document.querySelectorAll("[data-provider]").forEach(button => {
    button.addEventListener("click", () => handleProviderSignIn(button));
  });

  document.getElementById("login-form").addEventListener("submit", async event => {
    event.preventDefault();
    const [email, password] = event.currentTarget.querySelectorAll("input");
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    try {
      const auth = getAuth();
      await auth.signInWithEmailAndPassword(email.value.trim(), password.value);
      completeSignIn("Student");
    } catch (error) {
      showAuthMessage(describeAuthError(error));
    } finally {
      submitButton.disabled = false;
    }
  });

  document.getElementById("register-form").addEventListener("submit", async event => {
    event.preventDefault();
    const [name, email, password] = event.currentTarget.querySelectorAll("input");
    const role = event.currentTarget.querySelector("select").value;
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    try {
      const auth = getAuth();
      const result = await auth.createUserWithEmailAndPassword(email.value.trim(), password.value);
      await result.user.updateProfile({ displayName: name.value.trim() });
      completeSignIn(role);
    } catch (error) {
      showAuthMessage(describeAuthError(error));
    } finally {
      submitButton.disabled = false;
    }
  });
})();
