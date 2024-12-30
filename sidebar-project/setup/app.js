//get elements
const sideToggleEl = document.querySelector(".sidebar-toggle");

const asideElement = document.querySelector(".sidebar");

const closeBtnEl = document.querySelector(".close-btn");

//add event listener to the toggle element
sideToggleEl.addEventListener("click", showSideBar);
closeBtnEl.addEventListener("click", closeSideBar);

function showSideBar() {
  asideElement.classList.toggle("show-sidebar");
}

function closeSideBar() {
  if (asideElement.classList.contains("show-sidebar")) {
    asideElement.classList.remove("show-sidebar");
  }
}
