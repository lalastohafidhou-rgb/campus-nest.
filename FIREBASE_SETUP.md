# Firebase sign-in setup

The sign-in forms use Firebase Authentication for Google, Apple, and email/password. Provider buttons only start authentication after Firebase is configured and the provider is enabled.

## 1. Add your Firebase web app configuration

1. Create a Firebase project and register a Web app in the Firebase console.
2. Copy the web app configuration into `firebase-config.js`, replacing the `YOUR_...` placeholder values.
3. In Firebase Authentication, enable **Email/Password** and **Google**.
4. Add the domains you'll use under Authentication → Settings → Authorized domains. For local development, serve this folder from `http://localhost` rather than opening `index.html` directly.

Firebase web app configuration, including its API key, is intended to be used in client-side code. Do not put service-account credentials or private keys in this file.

## 2. Configure Apple sign-in

1. In your Apple Developer account, create and configure a **Sign in with Apple** key and Services ID for your website domain and return URL.
2. In Firebase Authentication, enable **Apple** and enter the Apple Services ID, Team ID, Key ID, and private key in the provider settings.
3. Add the Firebase callback URL shown in the provider settings to your Apple Services ID configuration.
4. Add your local and deployed site domains to Firebase Authentication's Authorized domains.

Keep the Apple private key in the Firebase console; never add it to this project.

## 3. Run and verify

Serve the project over HTTP (for example, `python -m http.server 8000`) and open `http://localhost:8000`. Test Google, Apple, and email/password sign-in with accounts you control. Firebase's popup sign-in requires a supported browser context and an authorized domain.

The owner/student choice currently controls which **demo dashboard** opens after a new account is created. It is not a persisted or secure authorization role. Protecting owner/admin data requires server-side role assignment and authorization before the dashboard contains real user data.
