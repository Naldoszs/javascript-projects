import { text } from "./data.js";

//get elements
const formEl = document.querySelector(".js-lorem-form");
const inputEl = document.getElementById("amount");
const resultContainer = document.querySelector(".js-lorem-text");
const wrapperEl = document.querySelector(".js-wrapper");
const modalEl = document.querySelector(".js-modal-element ");
const modalTextEl = modalEl.querySelector("p");
const iElement = modalEl.querySelector("button i");
const clearAllBtnEl = document.querySelector(".js-clear-btn");
let val;
let randomText;
//add event listener
formEl.addEventListener("submit", (e) => {
  //prevent initial behaviour
  e.preventDefault();

  //get the val inside the input
  val = parseInt(inputEl.value);

  //if empty val
  //if num is  or equal less than 0
  //if num is greater than 9
  if (inputEl.value === "") {
    resultContainer.innerHTML = ""; //clear everything in d container
    //add class of .show-modal on the wrapper element
    modalTextEl.innerText = "Please, input a valid number"; // change the text of the modal
    wrapperEl.classList.add("show-modal");
    //add a click event on the i tag of the show modal
    removeTheModal();
  } else if (isNaN(val) || val <= 0 || val > 9) {
    resultContainer.innerHTML = ""; //clear everything in d container
    modalTextEl.innerText =
      "Please, input a valid number greater than 0 and less than 10"; // change the text of the modal
    wrapperEl.classList.add("show-modal");
  } else {
    generateParas();
  }

  //add inner text

  //end actn
  inputEl.value = "";
});

// function to add click event on the i tag

function removeTheModal() {
  iElement.addEventListener("click", function (e) {
    wrapperEl.classList.remove("show-modal");
  });
}

//function to clear all text in the resultcontainer
function clearAllParas() {
  resultContainer.innerHTML = "";
}

//function to create clear all btn

function createClearAllBtn() {
  const btn = document.createElement("button");
  // add the btn class
  btn.classList.add("js-clear-btn", "clear-btn");
  //add text content
  btn.textContent = "Clear All";

  //add event listener on the btn element
  btn.addEventListener("click", clearAllParas);

  //append
  resultContainer.appendChild(btn);
  return btn;
}

//function to display paragraphs generated on the page
function generateParas() {
  //make the result empty to start wid
  resultContainer.innerHTML = "";
  //remove both modals of mistake automatically or manually
  setTimeout(() => wrapperEl.classList.remove("show-modal"), 5000); // Automatically remove the modal

  //random generate paragraph based on the input number
  for (let i = 0; i < val; i++) {
    //reassign randomeIndex
    randomText = Math.floor(Math.random() * text.length);
    //create new para
    const newPara = document.createElement("p");
    // add the result class
    newPara.classList.add("result");
    //add inner text
    newPara.innerText = text[randomText];
    //append in the result container
    resultContainer.appendChild(newPara);
  }

  //create a clear all btn
  createClearAllBtn();
}
