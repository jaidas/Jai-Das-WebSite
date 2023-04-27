// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnclosemodal = document.querySelector(".close-modal");
// const btnsopenmodal = document.querySelectorAll(".show-modal");

// const openmodal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closemodal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsopenmodal.length; i++)
//   btnsopenmodal[i].addEventListener("click", openmodal);
// btnclosemodal.addEventListener("click", closemodal);
// overlay.addEventListener("click", closemodal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closemodal();
//   }
// });

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const window = dom.window;
const document = window.document;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnsopenmodal = document.querySelectorAll(".show-modal");

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsopenmodal.length; i++)
  btnsopenmodal[i].addEventListener("click", openmodal);
btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
