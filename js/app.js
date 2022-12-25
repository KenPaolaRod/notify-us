const navbar = document.querySelector("#top-nav");
const sidenavOpenBtn = document.querySelector("#open-sidenav-btn");
const sidenavCloseBtn = document.querySelector("#sidenav-close-btn");
const sidebar = document.querySelector("#sidebar");
const dateSpan = document.querySelector("#date");

// show sidebar
sidenavOpenBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

// hide sidebar
sidenavCloseBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
dateSpan.innerHTML = new Date().getFullYear();