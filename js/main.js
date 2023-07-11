let fill = document.querySelector(".fill");
let mode = document.querySelector(".mode");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let hTitle = document.querySelector(".header-title h1");
let hbtn = document.querySelector("header button");
let header = document.querySelector("header");
let links = document.querySelector(".links");
let finish = document.querySelector(".finish");
let journal = document.querySelectorAll(".journal .item h4");
let P = document.querySelectorAll(".explore p");
let journal_2 = document.querySelectorAll(".journal .item h6");
let footer = document.querySelector("footer");
let allImages = document.querySelectorAll(".explore .box img ");
let overlayerdark = document.querySelector(".overlayer-dark");
let contactlightoverlay = document.querySelector(".contact-light-overlay");
let contactlayer = document.querySelector("footer .layer");
let overlayerlight = document.querySelector(".overlayer-light");
let allP = document.querySelectorAll("p");
let alla = document.querySelectorAll("a");
let mainTitle = document.querySelectorAll(".main-title h3");

fill.addEventListener("click", function () {
  mode.classList.toggle("show");
});
// ===========================

let sun = document.querySelector(".sun");
sun.onclick = function () {
  body.style.background = "#fff";
  body.style.color = "#000";
  header.style.backgroundImage = "url(images/header-light.jpg)";
  overlayerdark.classList.remove("overlayer-dark");
  overlayerdark.classList.add("overlayer-light");
  contactlayer.classList.remove("layer");
  contactlayer.classList.add("contact-light-overlay");
  hTitle.style.color = "black";
  hbtn.style.color = "black";
  nav.classList.add("bg");
  links.style.color = "black";
  finish.style.color = "black";

  allP.forEach((e) => {
    e.classList.add("text-black");
  });

  alla.forEach((e) => {
    e.classList.add("text-black");
  });

  allImages.forEach((e) => {
    e.style.opacity = ".8";
  });

  mainTitle.forEach((e) => {
    e.style.setProperty("color", "black");
  });

  journal.forEach((e) => {
    e.style.setProperty("color", "black");
  });

  journal_2.forEach((e) => {
    e.style.setProperty("color", "black");
  });
};
// ===========================

let moon = document.querySelector(".moon");
moon.onclick = function () {
  header.style.backgroundImage = "url(images/header.jpg)";
  body.style.background = "#212529";
  overlayerdark.classList.add("overlayer-dark");
  overlayerdark.classList.remove("overlayer-light");
  contactlayer.classList.add("layer");
  contactlayer.classList.remove("contact-light-overlay");

  links.style.color = "white";
  finish.style.color = "white";
  hTitle.style.color = "white";
  hbtn.style.color = "white";

  allP.forEach((e) => {
    e.classList.remove("text-black");
  });

  alla.forEach((e) => {
    e.classList.remove("text-black");
  });

  mainTitle.forEach((e) => {
    e.style.setProperty("color", "white");
  });

  journal.forEach((e) => {
    e.style.setProperty("color", "white");
  });

  journal_2.forEach((e) => {
    e.style.setProperty("color", "white");
  });
};
// ===========================
