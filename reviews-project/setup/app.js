import { reviews } from "./data.js";

//!GET ELEMENTS
const authorEl = document.querySelector(".js-author");

const imgEl = document.querySelector("img");

const jobEl = document.querySelector(".js-job");

const infoEl = document.querySelector(".js-info");

//!GET BUTTONS
const prevBtnEl = document.querySelector(".js-prev-btn");

const nextBtnEl = document.querySelector(".js-next-btn");

const randomBtnEl = document.querySelector(".js-random-btn");

let currentItem = 0; // set current item

//! ADD EVENT ON THE WINDOW OBJ TO LOAD FIRST REVIEW
window.addEventListener("DOMContentLoaded", () => {
  displayPerson(currentItem);
});

//!ADD EVENT LISTENERS
//for next button element
nextBtnEl.addEventListener("click", () => {
  if (currentItem === reviews.length - 1) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  displayPerson(currentItem);
});

//for previous button element
prevBtnEl.addEventListener("click", () => {
  if (currentItem === 0) {
    currentItem = reviews.length - 1;
  } else {
    currentItem--;
  }
  displayPerson(currentItem);
});

//for random button element
randomBtnEl.addEventListener("click", () => {
  //get random number
  currentItem = Math.floor(Math.random() * reviews.length); //gets random num btw 0-3
  console.log(currentItem);
  displayPerson(currentItem);
});

//!FUNCTION TO SHOW PERSON BASED ON ITEM
function displayPerson(persona) {
  const item = reviews[persona]; //pick whatever item frm review array
  const { img, job, name, text } = item; // destructure the item object
  imgEl.src = img;
  jobEl.innerText = job;
  authorEl.innerText = name;
  infoEl.innerText = text;
}
