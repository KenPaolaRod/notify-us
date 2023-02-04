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
  var text_to_copy = element.parentElement.querySelector("p").innerHTML;

  // Need to use the old way
  if (!navigator.clipboard){
    fallbackCopyTextToClipboard(text);
  } else{
      navigator.clipboard.writeText(text_to_copy);
  } 
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {}

  document.body.removeChild(textArea);
}

plansToggle.forEach(e => e.addEventListener("click", () => {
  plansToggle.forEach(el => el.classList.toggle("plans-toggle-active"))
  pricesToggle.forEach(e => {
    e.classList.toggle("hide-price")
  })
}))

