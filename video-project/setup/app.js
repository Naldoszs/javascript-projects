// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

//selectn of elements

const switchBtnEl = document.querySelector(".switch-btn");

const videoEl = document.querySelector(".video-container");

const preloaderEl = document.querySelector(".preloader");

//hide preloder on page load
window.addEventListener("load", function (e) {
  if (!preloaderEl.classList.contains("hide-preloader")) {
    preloaderEl.classList.add("hide-preloader");
  }
});

switchBtnEl.addEventListener("click", function (e) {
  if (!switchBtnEl.classList.contains("slide")) {
    switchBtnEl.classList.add("slide");
    //functionality
    videoEl.pause(); //pauses
  } else {
    switchBtnEl.classList.remove("slide");
    //functionality
    videoEl.play(); //plays
  }
});
