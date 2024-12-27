//!GET ELEMENTS
const navToggleElement = document.querySelector(".js-nav-toggle");

const linkElements = document.querySelector(".js-links");

// !ADD EVENT LISTENERS
navToggleElement.addEventListener("click", toggleLinks);

// !ADD EVENT LISTENERS TO WINDOW OBJECT
window.addEventListener("resize", handleResize);

//function to toggle the links
function toggleLinks(e) {
  const height = linkElements.scrollHeight;
  if (!linkElements.classList.contains("show-links")) {
    linkElements.classList.add("show-links");
    linkElements.style.height = `${height}px`;
  } else {
    linkElements.style.height = "0";
    linkElements.classList.remove("show-links");
  }
}

//function to handle resize to overide JS inline sytle for screen > 800px
function handleResize(e) {
  if (window.innerWidth >= 800) {
    linkElements.style.height = "auto";
    linkElements.classList.remove("show-links");
  }
}
