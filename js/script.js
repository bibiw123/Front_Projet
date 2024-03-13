"use strict";

const header = document.querySelector("header");
const menus = document.querySelector(".menus");
const sliders = document.querySelectorAll(".slide");
const SliderContentEl = document.querySelectorAll(".slider-content");
const leftBtn = document.getElementById("left");
const RightBtn = document.getElementById("right");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    menus.classList.add("sticky");
  } else {
    menus.classList.remove("sticky");
  }
});

let activeSlide = 1;

// set Body Background
function setBgBody() {
  header.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}

setBgBody();

function setActiveSlide() {
  sliders.forEach((slides) => slides.classList.remove("active"));
  sliders[activeSlide].classList.add("active");
}

// set content
function setContent() {
  SliderContentEl.forEach((slidersContents) => {
    slidersContents.classList.remove("active");
  });
  SliderContentEl[activeSlide].classList.add("active");
}

RightBtn.addEventListener("click", () => {
  nextSlide();
  setBgBody();
  setActiveSlide();
  setContent();
});

leftBtn.addEventListener("click", () => {
  previousSlide();
  setBgBody();
  setActiveSlide();
  setContent();
});

function nextSlide() {
  activeSlide++;
  if (activeSlide > sliders.length - 1) {
    activeSlide = 0;
  }
}

function previousSlide() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = sliders.length - 1;
  }
}

setInterval(() => {
  nextSlide();
  setBgBody();
  setActiveSlide();
  setContent();
}, 7000);

