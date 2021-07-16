// Sticky Navigation Menu

let nav = document.querySelector("nav");
let scrollbtn = document.querySelector(".scroll_button a");
let value;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollbtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollbtn.style.display = "none";
  }
};

// Side Navigation Menu

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menubtn = document.querySelector(".menu_btn");
let cancelbtn = document.querySelector(".cancel_btn");

menubtn.onclick = function () {
  navBar.classList.add("active");
  menubtn.style.opacity = "0";
  menubtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollbtn.style.pointerEvents = "none";
};

cancelbtn.onclick = function () {
  navBar.classList.remove("active");
  menubtn.style.opacity = "1";
  menubtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollbtn.style.pointerEvents = "auto";
};

// Side Navigation bar close when click on navigation menu link

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menubtn.style.opacity = "1";
    menubtn.style.pointerEvents = "auto";
  });
}
