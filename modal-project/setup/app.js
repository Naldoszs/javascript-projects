// select modal-btn,modal-overlay,close-btn
const modalBtnEl = document.querySelector(".js-modal-btn");

const modalOverlayEl = document.querySelector(".js-modal-overlay");

const modalCloseBtnEl = document.querySelector(".js-close-btn");

// listen for click events on modal-btn and close-btn
modalBtnEl.addEventListener("click", openModal);
modalCloseBtnEl.addEventListener("click", closeModal);

// function to open modal
function openModal() {
  if (!modalOverlayEl.classList.contains("open-modal")) {
    modalOverlayEl.classList.add("open-modal");
  }
}

// function to remove modal
function closeModal() {
  if (modalOverlayEl.classList.contains("open-modal")) {
    modalOverlayEl.classList.remove("open-modal");
  }
}
