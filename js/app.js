const navbar = document.querySelector("#top-nav");
const sidenavOpenBtn = document.querySelector("#open-sidenav-btn");
const sidenavCloseBtn = document.querySelector("#sidenav-close-btn");
const sidebar = document.querySelector("#sidebar");
const dateSpan = document.querySelector("#date");
let faq = document.querySelectorAll(".faq-box");
const faqBtn = document.querySelectorAll(".faq-box button")
const plansToggle = document.querySelectorAll(".frequency-switch span");
const pricesToggle = document.querySelectorAll(".box-price span.big-number");


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

// sticky nav 

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// PROCESS questions

faq.forEach( e => {
  e.addEventListener('click', () => {
    e.classList.toggle('show-content');
  });
});


// Copy text from home page 

function copyText(element) {
  var text = element.previousElementSibling.previousElementSibling.innerHTML;
  var temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  element.innerHTML = `Copied <i class="fa-solid fa-copy"></i>`     ;
  setTimeout(function() {
    element.innerHTML = `Copy <i class="fa-solid fa-copy"></i>`;
  }, 5000);

}


// plans price switch 


plansToggle.forEach(e => e.addEventListener("click", () => {

  plansToggle.forEach(el => el.classList.toggle("plans-toggle-active"))

  pricesToggle.forEach(e => {
    e.classList.toggle("hide-price")
  })
}))

