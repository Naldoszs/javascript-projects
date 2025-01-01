// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

// import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js";

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

//set the date
//using the DAY JS EXTERNAl LIBRARY
const dateEl = document.querySelector(".date");
// console.log(dateEl);
const data = dayjs();
const recentDate = data.year();
//insert the recent yearv in the span element
dateEl.innerHTML = recentDate;

//close links
//get the link container
const linkContainerEl = document.querySelector(".links-container");

//get the links element
const linkElements = linkContainerEl.querySelector(".links");

//get the nav toggle btn
const toggleBtnEl = document.querySelector(".nav-toggle");

toggleBtnEl.addEventListener("click", function (e) {
  //get the linsl el and make the height dynamic
  //   linkContainerEl.classList.toggle("show-links");
  const containerHeight = linkContainerEl.getBoundingClientRect().height;
  const linksHeight = linkElements.getBoundingClientRect().height;
  /*  if (linkContainerEl.classList.contains("show-links")) {
    linkContainerEl.style.height = `${linkContainerEl.scrollHeight}px`;
  } else {
    linkContainerEl.style.height = "0px";
  } */
  //another if-statement using getClientBoundingRect method.
  if (
    !linkContainerEl.classList.contains("show-links") &&
    containerHeight === 0
  ) {
    linkContainerEl.style.height = `${linksHeight}px`;
    linkContainerEl.classList.add("show-links");
  } else {
    linkContainerEl.classList.remove("show-links");
    linkContainerEl.style.height = "0px";
  }
});

// fixed nav bar
//get the nav bar
const navEl = document.querySelector("#nav");
//get the toplink
const topLinkEl = document.querySelector(".top-link");

window.addEventListener("scroll", (e) => {
  // console.log(pageYOffset);
  // console.log(window.scrollY);
  /*   const navHeight = parseFloat(window.getComputedStyle(navEl).height); */
  const navHeight = navEl.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;

  //conditionals
  if (scrollY > navHeight) {
    //add fixed nav
    navEl.classList.add("fixed-nav");
  } else {
    //remove fixed nav
    navEl.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLinkEl.classList.add("show-link");
  } else {
    topLinkEl.classList.remove("show-link");
  }
});

// smooth scroll
// select links
//get the scroll links
const scrollLinkEls = document.querySelectorAll(".js-scroll-link");

scrollLinkEls.forEach((scrollLink) => {
  scrollLink.addEventListener("click", function (e) {
    //prevent the initial scroll behaviour
    e.preventDefault();
    //get the clicked element attribute & get the element
    //get attribute
    const attributeVal = e.target.getAttribute("href").slice(1);
    // console.log(atrributeVal);
    //get the element the attribute targets
    const targetElement = document.getElementById(attributeVal);
    // console.log(targetElement);

    //get heights of neccessary elements\
    const navBarHeight = navEl.getBoundingClientRect().height;
    const linkContainerHeight = linkContainerEl.getBoundingClientRect().height;
    //check if the navbar has a class of fixed-nav
    const isFixedNav = navEl.classList.contains("fixed-nav");

    //get the position of the target element
    let position = targetElement.offsetTop - navBarHeight;
    //stopped at 4:30:00
    // console.log(position);
    //scroll to the position
    if (!isFixedNav) {
      position = targetElement.offsetTop - navBarHeight * 2;
      //scroll action
      window.scrollTo({
        left: 0,
        top: position,
      });
    }

    //another if statement for mobile view
    if (navBarHeight > 82) {
      position += linkContainerHeight;
      //scroll action
      window.scrollTo({
        left: 0,
        top: position,
      });
    }

    //scroll action
    window.scrollTo({
      left: 0,
      top: position,
    });

    //remove the nav in mobile view
    linkContainerEl.style.height = "0px";
  });
});

// console.log(window.getComputedStyle(navEl).height);
