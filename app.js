const stays = [
  {id:1,name:"The Olive House",area:"Wandegeya",university:"Makerere University",price:320000,room:"Private room",rating:4.9,reviews:38,available:"Available now",beds:"Private room",image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80"],type:"Hostel",facilities:["Wi-Fi","Water","Security","Laundry","Study room"],description:"A calm, light-filled home for focused students, just a short walk from Makerere's main gate. Friendly shared spaces, reliable essentials and a thoughtful team make it easy to settle in.",host:"Sarah Nakato",phone:"+256 772 123 456"},
  {id:2,name:"Mirembe Student Living",area:"Kikoni",university:"Makerere University",price:450000,room:"Private room",rating:4.8,reviews:26,available:"2 rooms left",beds:"Private room",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"],type:"Hostel",facilities:["Wi-Fi","Water","Security","Study room","Kitchen"],description:"Modern student living with a little extra breathing room. Mirembe pairs warm, well-kept interiors with practical amenities and a welcoming community in the heart of Kikoni.",host:"Peter Ssemanda",phone:"+256 701 442 118"},
  {id:3,name:"Pearl Court Residences",area:"Nsambya",university:"Cavendish University Uganda",price:550000,room:"Studio",rating:4.9,reviews:31,available:"Available now",beds:"Studio",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"],type:"Apartment",facilities:["Wi-Fi","Water","Security","Laundry","Kitchen"],description:"A peaceful, private studio in a secure Nsambya residence. Enjoy your own kitchenette and study nook, with Cavendish University and everyday essentials close by.",host:"Grace Atim",phone:"+256 782 903 124"},
  {id:4,name:"Acacia Campus House",area:"Makerere",university:"Makerere University",price:280000,room:"Shared room",rating:4.7,reviews:19,available:"3 beds left",beds:"Shared room",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"],type:"Hostel",facilities:["Wi-Fi","Water","Security","Study room"],description:"A friendly and affordable shared home right in Makerere. The courtyard is perfect for a breath of fresh air between classes, and the campus is just minutes away.",host:"Daniel Kato",phone:"+256 755 840 201"},
  {id:5,name:"The Haven at Ntinda",area:"Ntinda",university:"Kyambogo University",price:390000,room:"Private room",rating:4.8,reviews:22,available:"Available now",beds:"Private room",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"],type:"Apartment",facilities:["Wi-Fi","Water","Security","Laundry"],description:"A bright private room in a leafy, secure home near Kyambogo University. Enjoy the quiet, well-connected neighbourhood and a host who makes moving in feel easy.",host:"Martha Luwum",phone:"+256 704 552 016"},
  {id:6,name:"Wandegeya Corner Rooms",area:"Wandegeya",university:"Makerere University",price:220000,room:"Shared room",rating:4.6,reviews:17,available:"1 bed left",beds:"Shared room",image:"https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=82",images:["https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=85","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=800&q=80"],type:"Hostel",facilities:["Wi-Fi","Water","Security","Study room"],description:"A cheerful, budget-friendly base for your Makerere days. Wandegeya's cafés, shops and campus routes are right on your doorstep, so everything feels within reach.",host:"Robert Mugisha",phone:"+256 782 611 508"}
];

const saved = new Set([2,5]);
let currentRoute = "home";
let activeStay = stays[0];
let toastTimer;
const money = value => `UGX ${Number(value).toLocaleString("en-UG")}`;
const imageAlt = stay => `${stay.name}, ${stay.area}, Kampala`;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function routeTo(route, updateHistory = true) {
  const page = route === "student" || route === "owner" || route === "admin" ? route : route;
  const hash = page === "details" ? `#details/${activeStay.id}` : `#${page}`;
  if (updateHistory && location.hash !== hash) history.pushState({route:page,stayId:page === "details" ? activeStay.id : undefined}, "", hash);
  currentRoute = page;
  document.querySelectorAll(".page").forEach(section => section.classList.toggle("active", section.dataset.page === page));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.route === page || (page === "details" && link.dataset.route === "explore")));
  if (page === "explore") renderExplore();
  if (page === "student") renderStudent("overview");
  if (page === "owner") renderOwner("owner-overview");
  if (page === "admin") renderAdmin("admin-overview");
  if (page === "details") renderDetails(activeStay);
  document.querySelector(".main-nav").classList.remove("open");
  document.querySelector(".mobile-menu").setAttribute("aria-expanded", "false");
  window.scrollTo({top:0,behavior:"smooth"});
}

function propertyCard(stay) {
  const isSaved = saved.has(stay.id);
  return `<article class="property-card" data-stay="${stay.id}" tabindex="0" aria-label="View ${imageAlt(stay)}">
    <div class="property-image-wrap"><img class="property-image" src="${stay.image}" alt="${imageAlt(stay)}" loading="lazy"><span class="property-tag ${stay.id % 2 ? "verified" : ""}">${stay.id % 2 ? "✓ Verified" : stay.type}</span><button class="favorite-button ${isSaved ? "saved" : ""}" data-favorite="${stay.id}" aria-label="${isSaved ? "Remove from" : "Add to"} saved places">${isSaved ? "♥" : "♡"}</button></div>
    <div class="property-info"><div class="property-name-line"><h3 class="property-name">${stay.name}</h3><span class="property-rating"><span>★</span> ${stay.rating}</span></div>
    <div class="property-location"><span>⌖</span> ${stay.area}, Kampala</div>
    <div class="property-meta"><span>⌂ ${stay.room}</span><span>◷ ${stay.university.replace(" University Uganda","").replace(" University","")}</span></div>
    <div class="property-price-row"><div class="property-price">${money(stay.price)}<small> / month</small></div><span class="property-availability">${stay.available}</span></div></div></article>`;
}

function renderFeatured() {
  document.getElementById("featured-list").innerHTML = stays.slice(0,3).map(propertyCard).join("");
}

function renderExplore() {
  const query = (document.getElementById("quick-search").value || "").trim().toLowerCase();
  const university = document.getElementById("filter-university").value;
  const area = document.getElementById("filter-area").value;
  const maxPrice = Number(document.getElementById("filter-price").value);
  const roomTypes = [...document.querySelectorAll('input[name="room"]:checked')].map(input => input.value);
  const facilities = [...document.querySelectorAll('input[name="facility"]:checked')].map(input => input.value);
  let matches = stays.filter(stay => {
    const textMatch = !query || `${stay.name} ${stay.area} ${stay.university}`.toLowerCase().includes(query);
    return textMatch && (!university || stay.university === university) && (!area || stay.area === area) && stay.price <= maxPrice &&
      (!roomTypes.length || roomTypes.includes(stay.room)) && facilities.every(item => stay.facilities.includes(item));
  });
  const sort = document.getElementById("sort-listings").value;
  if (sort === "price-low") matches.sort((a,b) => a.price-b.price);
  if (sort === "rating") matches.sort((a,b) => b.rating-a.rating);
  document.getElementById("explore-list").innerHTML = matches.map(propertyCard).join("");
  document.getElementById("result-count").textContent = `${matches.length} ${matches.length === 1 ? "stay" : "stays"}`;
  document.getElementById("showing-count").textContent = `${matches.length} ${matches.length === 1 ? "home" : "homes"}`;
  document.getElementById("empty-state").hidden = matches.length > 0;
  document.getElementById("explore-list").hidden = matches.length === 0;
}

function renderDetails(stay) {
  if (!stay) return;
  activeStay = stay;
  document.getElementById("detail-crumb").textContent = stay.name;
  document.getElementById("detail-content").innerHTML = `
    <div class="detail-header"><div><h1>${stay.name}</h1><p><span style="color:#b68b49">⌖</span> ${stay.area}, Kampala &nbsp; · &nbsp; <span style="color:#c2923f">★</span> ${stay.rating} (${stay.reviews} student reviews)</p></div><div class="detail-actions"><button class="outline-button" data-share>↗ Share</button><button class="outline-button" data-favorite="${stay.id}">${saved.has(stay.id) ? "♥ Saved" : "♡ Save"}</button></div></div>
    <div class="gallery-grid">${stay.images.map((image,index) => `<img src="${image}" alt="${index === 0 ? imageAlt(stay) : `${stay.name} accommodation interior ${index + 1}`}" ${index > 2 ? "loading=lazy" : ""}>`).join("")}<button class="gallery-more" data-gallery>▧ &nbsp; View all photos</button></div>
    <div class="detail-layout"><div class="detail-main"><div class="detail-summary"><span>✓ Verified property</span><span>⌂ ${stay.type}</span><span>◷ ${stay.available}</span></div><h2>A little about this place</h2><p class="detail-description">${stay.description}</p><h2 style="margin-top:24px">What you'll find here</h2><div class="amenities">${stay.facilities.map((facility,index) => `<div class="amenity"><i>${["⌁","◉","✓","♧","▤"][index%5]}</i>${facility}</div>`).join("")}</div><div class="host-card"><img class="host-face" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="${stay.host}"><div class="host-info"><strong>Hosted by ${stay.host}</strong><small>CampusNest host · Responds within a day</small></div><span class="host-verified">✓ Verified host</span></div></div>
    <aside class="booking-card"><div class="booking-price">${money(stay.price)} <small>/ month</small></div><div class="booking-rating"><span>★</span> ${stay.rating} · ${stay.reviews} reviews</div><div class="booking-check"><span>Room type</span><strong>${stay.room}</strong></div><div class="booking-check"><span>University</span><strong>${stay.university.replace(" University Uganda","")}</strong></div><div class="booking-check"><span>Availability</span><strong>${stay.available}</strong></div><button class="button button-primary" data-book="${stay.id}">Contact host <span>↗</span></button><div class="booking-note">You won't be charged yet</div></aside></div>`;
}

function renderStudent(tab) {
  const content = document.getElementById("student-content");
  const titleMap = {overview:"Overview",bookings:"My bookings",saved:"Saved places",notifications:"Notifications",profile:"My profile"};
  document.getElementById("dashboard-title").textContent = titleMap[tab] || "Overview";
  document.querySelectorAll("#page-student .side-link").forEach(link => link.classList.toggle("selected", link.dataset.tab === tab));
  if (tab === "overview") content.innerHTML = `<div class="welcome-row"><div><h1>Good morning, Amina <span style="color:#bf914b">✳</span></h1><p>Your next chapter is looking good. Here's what's happening.</p></div><button class="button button-primary" data-route="explore">Explore stays <span>↗</span></button></div>
    <div class="stats-grid"><div class="stat-card"><div class="stat-card-top">Active booking <span class="stat-card-icon">▣</span></div><div class="stat-card-value">01</div><div class="stat-card-note">Your move-in is coming up</div></div><div class="stat-card"><div class="stat-card-top">Saved places <span class="stat-card-icon">♡</span></div><div class="stat-card-value">${saved.size.toString().padStart(2,"0")}</div><div class="stat-card-note"><b>+1</b> since last week</div></div><div class="stat-card"><div class="stat-card-top">Messages <span class="stat-card-icon">✉</span></div><div class="stat-card-value">02</div><div class="stat-card-note">1 new host reply</div></div><div class="stat-card"><div class="stat-card-top">Profile strength <span class="stat-card-icon">◉</span></div><div class="stat-card-value">75<span style="font-size:12px">%</span></div><div class="stat-card-note">A little more to go</div></div></div>
    <div class="dashboard-columns"><div><section class="dash-card"><div class="dash-card-heading"><h2>Your upcoming stay</h2><button data-tab="bookings">View booking ↗</button></div><div class="booking-listing"><img src="${stays[0].image}" alt="${imageAlt(stays[0])}"><div class="booking-listing-copy"><strong>The Olive House</strong><small>Wandegeya, Kampala · Private room</small><small>Move-in date · 01 December 2026</small></div><span class="status-pill">Confirmed</span></div></section><section class="dash-card"><div class="dash-card-heading"><h2>Places on your mind</h2><button data-tab="saved">See all ↗</button></div><div class="saved-mini-grid">${[stays[1],stays[4]].map(s=>`<div class="saved-mini"><img src="${s.image}" alt="${imageAlt(s)}"><span><strong>${s.name}</strong><small>${money(s.price)} / month</small></span></div>`).join("")}</div></section></div><div><section class="dash-card"><div class="dash-card-heading"><h2>Just so you know</h2><button data-tab="notifications">All updates</button></div>${notificationRows()}</section><section class="dash-card"><div class="dash-card-heading"><h2>Finish your profile</h2><button data-tab="profile">Edit profile</button></div><div class="completion-copy"><span>You're 75% there</span><strong>75%</strong></div><div class="profile-progress"><span></span></div><div class="completion-copy"><span>Add your university and profile photo to help hosts get to know you.</span></div></section></div></div>`;
  else if (tab === "bookings") content.innerHTML = dashboardHeader("My bookings","Keep track of your student home plans.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Upcoming</h2><span class="status-pill">1 booking</span></div>${tableRows([[stays[0],"01 Dec 2026","Confirmed"],[stays[2],"Request sent","Awaiting host"]])}</section>`;
  else if (tab === "saved") content.innerHTML = dashboardHeader("Saved places","All the places you're keeping in mind.")+`<div class="property-grid explore-grid">${[...saved].map(id=>stays.find(s=>s.id===id)).filter(Boolean).map(propertyCard).join("")}</div>`;
  else if (tab === "notifications") content.innerHTML = dashboardHeader("Notifications","A little update from your CampusNest community.")+`<section class="dash-card">${notificationRows()}${notificationRows()}</section>`;
  else content.innerHTML = dashboardHeader("My profile","A few details help hosts welcome you.")+`<section class="dash-card profile-edit"><h2>Personal details</h2><div class="profile-fields"><label class="input-label">Full name<input value="Amina Nansubuga"></label><label class="input-label">Email address<input value="amina.n@example.com"></label><label class="input-label">University<select><option>Makerere University</option><option>Cavendish University Uganda</option></select></label><label class="input-label">Course of study<input value="Bachelor of Business Administration"></label></div><button class="button button-primary" data-action="save-profile">Save changes <span>↗</span></button></section>`;
}

function dashboardHeader(title, subtitle) {
  return `<div class="welcome-row"><div><h1>${title}</h1><p>${subtitle}</p></div><button class="button button-primary" data-route="explore">Explore stays <span>↗</span></button></div>`;
}

function notificationRows() {
  return `<div class="notification-row"><div class="notification-icon">✉</div><div><strong>Sarah replied to your message</strong><p>The Olive House is available for your move-in date.</p><time>2 hours ago</time></div></div><div class="notification-row"><div class="notification-icon">♡</div><div><strong>A place on your list has new photos</strong><p>Take another look at Mirembe Student Living.</p><time>Yesterday</time></div></div>`;
}

function tableRows(rows) {
  return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>PROPERTY</th><th>MOVE-IN</th><th>MONTHLY RENT</th><th>STATUS</th><th></th></tr></thead><tbody>${rows.map(([stay,date,status])=>`<tr><td><span class="table-property"><img src="${stay.image}" alt=""><span>${stay.name}</span></span></td><td>${date}</td><td>${money(stay.price)}</td><td><span class="status-pill ${status === "Awaiting host" ? "pending" : ""}">${status}</span></td><td><button class="table-action" data-detail="${stay.id}">View</button></td></tr>`).join("")}</tbody></table></div>`;
}

function renderOwner(tab) {
  const content = document.getElementById("owner-content");
  const titleMap = {"owner-overview":"Overview",properties:"My properties",rooms:"Rooms & availability",requests:"Booking requests","owner-photos":"Photos & media","owner-profile":"Host profile"};
  document.getElementById("owner-dashboard-title").textContent = titleMap[tab] || "Overview";
  document.querySelectorAll("#page-owner .side-link").forEach(link => link.classList.toggle("selected", link.dataset.tab === tab));
  if (tab === "owner-overview") content.innerHTML = `<div class="welcome-row"><div><h1>Good morning, James <span style="color:#bf914b">✳</span></h1><p>Here's what's happening with your spaces this week.</p></div><button class="button button-primary" data-action="add-property">＋ Add a property</button></div><div class="stats-grid"><div class="stat-card"><div class="stat-card-top">Your properties <span class="stat-card-icon">⌂</span></div><div class="stat-card-value">03</div><div class="stat-card-note"><b>All verified</b> and live</div></div><div class="stat-card"><div class="stat-card-top">Booking requests <span class="stat-card-icon">▣</span></div><div class="stat-card-value">04</div><div class="stat-card-note">2 need your attention</div></div><div class="stat-card"><div class="stat-card-top">Rooms occupied <span class="stat-card-icon">▤</span></div><div class="stat-card-value">18<span style="font-size:12px">/24</span></div><div class="stat-card-note"><b>75%</b> occupancy rate</div></div><div class="stat-card"><div class="stat-card-top">Profile views <span class="stat-card-icon">◉</span></div><div class="stat-card-value">246</div><div class="stat-card-note"><b>+18%</b> this month</div></div></div><div class="dashboard-columns"><section class="dash-card"><div class="dash-card-heading"><h2>Recent booking requests</h2><button data-tab="requests">All requests ↗</button></div>${ownerRequestRows(3)}</section><section class="dash-card"><div class="dash-card-heading"><h2>Your spaces at a glance</h2><button data-tab="properties">Manage all</button></div>${stays.slice(0,3).map(s=>`<div class="notification-row"><img src="${s.image}" alt="" style="height:34px;width:42px;border-radius:4px;object-fit:cover"><div style="flex:1"><strong>${s.name}</strong><p>${s.area} · ${money(s.price)} / month</p></div><span class="status-pill">Live</span></div>`).join("")}</section></div>`;
  else if (tab === "properties") content.innerHTML = dashboardHeader("My properties","Manage your listings and how students see them.")+`<section class="dash-card"><div class="dash-card-heading"><h2>All properties</h2><button data-action="add-property">＋ Add property</button></div>${ownerPropertyTable()}</section>`;
  else if (tab === "requests") content.innerHTML = dashboardHeader("Booking requests","A quick reply can help a student find their home.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Requests to review</h2><span class="status-pill pending">4 pending</span></div>${ownerRequestRows(6)}</section>`;
  else if (tab === "rooms") content.innerHTML = dashboardHeader("Rooms & availability","See your room inventory at a glance.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Room availability</h2><button data-action="update-rooms">Update availability</button></div>${ownerPropertyTable()}</section>`;
  else if (tab === "owner-photos") content.innerHTML = dashboardHeader("Photos & media","Great photos help students picture themselves at home.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Property photos</h2><button data-action="upload-photos">＋ Upload photos</button></div><div class="property-grid explore-grid">${stays.slice(0,3).map(propertyCard).join("")}</div></section>`;
  else content.innerHTML = dashboardHeader("Host profile","Let students know a little about the person behind the place.")+`<section class="dash-card profile-edit"><h2>Host details</h2><div class="profile-fields"><label class="input-label">Host name<input value="James Mukasa"></label><label class="input-label">Email address<input value="james.m@example.com"></label><label class="input-label">Phone number<input value="+256 772 555 091"></label><label class="input-label">About you<input value="Proud Kampala host since 2019"></label></div><button class="button button-primary" data-action="save-profile">Save changes <span>↗</span></button></section>`;
}

function ownerPropertyTable() {
  return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>PROPERTY</th><th>ROOMS</th><th>OCCUPANCY</th><th>STATUS</th><th></th></tr></thead><tbody>${stays.slice(0,3).map((s,i)=>`<tr><td><span class="table-property"><img src="${s.image}" alt=""><span>${s.name}</span></span></td><td>${[8,10,6][i]} rooms</td><td>${[75,80,50][i]}%</td><td><span class="status-pill">Live</span></td><td><button class="table-action" data-action="edit-property">Edit</button></td></tr>`).join("")}</tbody></table></div>`;
}

function ownerRequestRows(count) {
  const applicants=[["Nadia K.","The Olive House","01 Dec 2026"],["Brian O.","Mirembe Student Living","15 Dec 2026"],["Esther A.","The Olive House","01 Jan 2027"],["Mark T.","Pearl Court Residences","01 Dec 2026"],["Joy N.","Mirembe Student Living","15 Jan 2027"],["David S.","The Olive House","01 Feb 2027"]];
  return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>STUDENT</th><th>PROPERTY</th><th>MOVE-IN</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody>${applicants.slice(0,count).map((r,i)=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="status-pill pending">New request</span></td><td><button class="table-action" data-action="review-request">Review</button></td></tr>`).join("")}</tbody></table></div>`;
}

function renderAdmin(tab) {
  const content = document.getElementById("admin-content");
  const titles = {"admin-overview":"Overview",users:"Users",verification:"Property verification","admin-bookings":"Bookings","admin-listings":"Listings",settings:"Settings"};
  document.getElementById("admin-dashboard-title").textContent = titles[tab] || "Overview";
  document.querySelectorAll("#page-admin .side-link").forEach(link => link.classList.toggle("selected", link.dataset.tab === tab));
  if (tab === "admin-overview") content.innerHTML = `<div class="welcome-row"><div><h1>Good morning, Admin <span style="color:#bf914b">✳</span></h1><p>Here's your CampusNest community at a glance.</p></div><span class="status-pill">● Platform healthy</span></div><div class="stats-grid"><div class="stat-card"><div class="stat-card-top">Registered students <span class="stat-card-icon">♧</span></div><div class="stat-card-value">2,481</div><div class="stat-card-note"><b>+12.8%</b> this month</div></div><div class="stat-card"><div class="stat-card-top">Active properties <span class="stat-card-icon">⌂</span></div><div class="stat-card-value">186</div><div class="stat-card-note"><b>+8</b> this week</div></div><div class="stat-card"><div class="stat-card-top">Booking requests <span class="stat-card-icon">▣</span></div><div class="stat-card-value">342</div><div class="stat-card-note"><b>+6.4%</b> this month</div></div><div class="stat-card"><div class="stat-card-top">Needs verification <span class="stat-card-icon">✓</span></div><div class="stat-card-value">07</div><div class="stat-card-note">Review properties</div></div></div><div class="dashboard-columns"><section class="dash-card"><div class="dash-card-heading"><h2>Recently listed properties</h2><button data-tab="admin-listings">All listings ↗</button></div>${adminPropertyRows(4)}</section><section class="dash-card"><div class="dash-card-heading"><h2>Needs your attention</h2><button data-tab="verification">Review all ↗</button></div>${["7 properties awaiting verification","3 student accounts flagged for review","4 new host applications"].map((item,i)=>`<div class="notification-row"><div class="notification-icon">${i===0?"✓":"♧"}</div><div style="flex:1"><strong>${item}</strong><p>${i===0?"Review listings to keep the community trusted.":"Take a look when you have a moment."}</p></div><button class="table-action" data-tab="verification">Review</button></div>`).join("")}</section></div>`;
  else if (tab === "users") content.innerHTML = dashboardHeader("Users","A view of students and hosts in your community.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Recently active users</h2><span>2,481 total students</span></div>${adminUserRows()}</section>`;
  else if (tab === "verification") content.innerHTML = dashboardHeader("Property verification","Review new listings to keep every student experience trustworthy.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Awaiting review</h2><span class="status-pill pending">7 properties</span></div>${adminPropertyRows(6,true)}</section>`;
  else if (tab === "admin-bookings") content.innerHTML = dashboardHeader("Bookings","Monitor student-host requests across the platform.")+`<section class="dash-card"><div class="dash-card-heading"><h2>Recent bookings</h2><span>342 this month</span></div>${adminBookingRows()}</section>`;
  else if (tab === "admin-listings") content.innerHTML = dashboardHeader("Listings","Manage the properties available to students.")+`<section class="dash-card"><div class="dash-card-heading"><h2>All listings</h2><button data-action="add-property">＋ Add listing</button></div>${adminPropertyRows(6)}</section>`;
  else content.innerHTML = dashboardHeader("Settings","Manage platform preferences and administrator access.")+`<section class="dash-card profile-edit"><h2>Platform settings</h2><div class="profile-fields"><label class="input-label">Platform name<input value="CampusNest"></label><label class="input-label">Support email<input value="hello@campusnest.ug"></label><label class="input-label">Default currency<select><option>UGX — Ugandan Shilling</option></select></label></div><button class="button button-primary" data-action="save-profile">Save settings <span>↗</span></button></section>`;
}

function adminPropertyRows(count, verification=false) {
  return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>PROPERTY</th><th>HOST</th><th>LOCATION</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody>${stays.slice(0,count).map((s,i)=>`<tr><td><span class="table-property"><img src="${s.image}" alt=""><span>${s.name}</span></span></td><td>${["Sarah Nakato","Peter Ssemanda","Grace Atim","Daniel Kato","Martha Luwum","Robert Mugisha"][i]}</td><td>${s.area}</td><td><span class="status-pill ${verification && i%2===0 ? "pending" : ""}">${verification && i%2===0?"Pending":"Verified"}</span></td><td><button class="table-action" data-action="${verification?"verify-property":"edit-property"}">${verification && i%2===0?"Review":"View"}</button></td></tr>`).join("")}</tbody></table></div>`;
}
function adminUserRows() { return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>NAME</th><th>EMAIL</th><th>ROLE</th><th>JOINED</th><th>STATUS</th></tr></thead><tbody>${[["Amina Nansubuga","amina.n@example.com","Student","12 Oct 2026"],["James Mukasa","james.m@example.com","Host","11 Oct 2026"],["Brian Okello","brian.o@example.com","Student","10 Oct 2026"],["Sarah Nakato","sarah.n@example.com","Host","09 Oct 2026"]].map((r,i)=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="status-pill">${i===1||i===3?"Verified":"Active"}</span></td></tr>`).join("")}</tbody></table></div>`; }
function adminBookingRows() { return `<div class="table-wrap"><table class="dashboard-table"><thead><tr><th>STUDENT</th><th>PROPERTY</th><th>DATE</th><th>MONTHLY RENT</th><th>STATUS</th></tr></thead><tbody>${[["Amina N.","The Olive House","01 Dec 2026",320000,"Confirmed"],["Nadia K.","Mirembe Student Living","15 Dec 2026",450000,"Pending"],["Brian O.","Pearl Court Residences","01 Jan 2027",550000,"Confirmed"],["Esther A.","Acacia Campus House","01 Dec 2026",280000,"Pending"]].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${money(r[3])}</td><td><span class="status-pill ${r[4]==="Pending"?"pending":""}">${r[4]}</span></td></tr>`).join("")}</tbody></table></div>`; }

document.addEventListener("click", event => {
  const scrollTarget = event.target.closest("[data-scroll]");
  if (scrollTarget) {
    event.preventDefault();
    if (currentRoute !== "home") routeTo("home");
    setTimeout(() => document.getElementById(scrollTarget.dataset.scroll)?.scrollIntoView({behavior:"smooth"}), 40);
    return;
  }
  const route = event.target.closest("[data-route]");
  if (route) { event.preventDefault(); routeTo(route.dataset.route); return; }
  const authTab = event.target.closest("[data-auth]");
  if (authTab) { const isRegister = authTab.dataset.auth === "register"; document.getElementById("auth-login").hidden = isRegister; document.getElementById("auth-register").hidden = !isRegister; document.querySelectorAll(".auth-tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.auth===authTab.dataset.auth)); return; }
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) { event.stopPropagation(); const id=Number(favorite.dataset.favorite); saved.has(id)?saved.delete(id):saved.add(id); if(currentRoute==="details")renderDetails(stays.find(s=>s.id===id)); else if(currentRoute==="explore")renderExplore(); else if(currentRoute==="student")renderStudent("saved"); else renderFeatured(); showToast(saved.has(id)?"Saved to your places":"Removed from saved places"); return; }
  const stayCard = event.target.closest("[data-stay]");
  if (stayCard) { activeStay=stays.find(s=>s.id===Number(stayCard.dataset.stay)); routeTo("details"); return; }
  const detail = event.target.closest("[data-detail]");
  if (detail) { activeStay=stays.find(s=>s.id===Number(detail.dataset.detail)); routeTo("details"); return; }
  const book = event.target.closest("[data-book]");
  if (book) { showToast(`Host contact: ${activeStay.phone}`); return; }
  const tab = event.target.closest("[data-tab]");
  if (tab) { if (currentRoute==="student") renderStudent(tab.dataset.tab); else if(currentRoute==="owner")renderOwner(tab.dataset.tab);else if(currentRoute==="admin")renderAdmin(tab.dataset.tab); return; }
  if (event.target.closest("[data-share]")) { if(navigator.share) navigator.share({title:activeStay.name,url:location.href}).catch(()=>{}); else {navigator.clipboard?.writeText(location.href);showToast("Property link copied");} return; }
  if (event.target.closest("[data-gallery]")) { showToast("You're viewing all available property photos"); return; }
  const action = event.target.closest("[data-action]");
  if (action) { const messages={"save-profile":"Your changes have been saved.","add-property":"Property setup is ready to get started.","update-rooms":"Room availability updated.","upload-photos":"Choose photos from your device to upload.","edit-property":"Property details are ready to edit.","review-request":"Booking request opened for review.","verify-property":"Property verification details opened."}; showToast(messages[action.dataset.action]||"Your update has been saved.");return;}
  if (event.target.closest("#empty-clear") || event.target.closest("#clear-filters")) { clearFilters(); return; }
});

function clearFilters() {
  document.getElementById("filter-university").value="";
  document.getElementById("filter-area").value="";
  document.getElementById("filter-price").value="1000000";
  document.querySelectorAll('#page-explore input[type="checkbox"]').forEach(input=>input.checked=false);
  document.getElementById("quick-search").value="";
  document.getElementById("price-value").textContent="Any price";
  renderExplore();
}

document.getElementById("hero-search").addEventListener("submit",event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  routeTo("explore");
  clearFilters();
  document.getElementById("filter-university").value=form.get("university");
  document.getElementById("filter-area").value=form.get("area");
  if(form.get("budget")) document.getElementById("filter-price").value=form.get("budget");
  document.getElementById("price-value").textContent=form.get("budget")?`Up to ${money(form.get("budget"))}`:"Any price";
  renderExplore();
});
document.getElementById("quick-search-btn").addEventListener("click",renderExplore);
document.getElementById("quick-search").addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();renderExplore();}});
document.getElementById("apply-filters").addEventListener("click",renderExplore);
document.getElementById("sort-listings").addEventListener("change",renderExplore);
document.getElementById("filter-price").addEventListener("input",event=>{document.getElementById("price-value").textContent=Number(event.target.value)>=1000000?"Any price":`Up to ${money(event.target.value)}`;});
document.querySelectorAll("#filter-university,#filter-area").forEach(select=>select.addEventListener("change",renderExplore));
document.querySelectorAll('#page-explore input[type="checkbox"]').forEach(input=>input.addEventListener("change",renderExplore));
window.addEventListener("campusnest:auth-success",event=>{const role=event.detail.role==="Property owner"?"owner":"student";showToast("You're signed in. Welcome to CampusNest!");routeTo(role);});
document.querySelector(".mobile-menu").addEventListener("click",event=>{const nav=document.querySelector(".main-nav");nav.classList.toggle("open");event.currentTarget.setAttribute("aria-expanded",nav.classList.contains("open"));});
document.querySelectorAll(".dashboard-menu").forEach(button=>button.addEventListener("click",()=>document.querySelector(".dashboard-shell .dashboard-sidebar").classList.toggle("mobile-open")));
document.addEventListener("keydown",event=>{if(event.key==="Enter"&&event.target.matches(".property-card")){activeStay=stays.find(s=>s.id===Number(event.target.dataset.stay));routeTo("details");}});
window.addEventListener("hashchange",()=>{const [route,stayId]=location.hash.slice(1).split("/");if(route==="details"&&stayId)activeStay=stays.find(stay=>stay.id===Number(stayId))||stays[0];if(["home","explore","login","student","owner","admin","details"].includes(route)&&route!==currentRoute)routeTo(route,false);});
window.addEventListener("popstate",()=>{const [route,stayId]=location.hash.slice(1).split("/");if(route==="details")activeStay=stays.find(stay=>stay.id===Number(stayId))||stays[0];routeTo(["home","explore","login","student","owner","admin","details"].includes(route)?route:"home",false);});

renderFeatured();
const [initialRoute,initialStayId]=location.hash.slice(1).split("/");
if(initialRoute==="details")activeStay=stays.find(stay=>stay.id===Number(initialStayId))||stays[0];
if(["home","explore","login","student","owner","admin","details"].includes(initialRoute)) routeTo(initialRoute,false);
