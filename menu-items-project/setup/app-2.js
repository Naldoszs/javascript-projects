import { menuItems } from "./data.js";
import calculateMoney from "./money.js";

//! getting elements
//get the section container
const sectionContainerEl = document.querySelector(".js-section-center");
//get the container to append the filter btns
let btnContainerEl = document.querySelector(".js-btn-container");

// on window load

window.addEventListener("DOMContentLoaded", function () {
  createFilterBtns(menuItems);
  displayItems(menuItems);
});

// ftn to display menu items
function displayItems(menuArray) {
  // make the container empty to start with
  sectionContainerEl.innerHTML = "";
  //loop through the array
  menuArray
    .map((menuItem) => {
      //destrutrue the menuArray
      const { img, title, desc, priceCent } = menuItem;
      return (sectionContainerEl.innerHTML += ` <article class="menu-item">
              <!-- the menu item image -->
              <img class="photo" src="${img}" alt="menu item image" />
              <div class="item-info">
                <!-- the item info header -->
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${calculateMoney(priceCent)}</h4>
                </header>
                <p class="item-text">${desc}</p>
              </div>
          </article>`);
    })
    .join("");
}

//function to filter btns

function createFilterBtns(menuArray) {
  /* //make btns container it empty to start with
  btnContainerEl = ""; */
  //creating the btns dynamically based on the filtered menus
  //loop 2ru array a& get unique categories
  const uniqueCategories = [
    "all",
    ...new Set(
      menuArray.map((item) => {
        return item.category;
      })
    ),
  ];

  //initialize btn;
  let btn;
  //clear whats initially in the buttoncontainer element
  btnContainerEl.innerHTML = "";
  uniqueCategories.forEach((category) => {
    //create element
    console.log(category);
    //create btn
    btn = document.createElement("button");
    // add class to btn
    btn.classList.add("filter-btn");
    //add the data attribut to the button
    btn.setAttribute("data-id", `${category}`);
    //add type attributr to the button
    btn.setAttribute("type", "button");
    //add text content d btn
    btn.innerText = category;

    //addevent listener to the btn element individually as per id
    btn.addEventListener("click", (evt) => {
      console.log(evt.target.dataset.id);
      //set conditionals
      if (evt.target.dataset.id === "all") {
        displayItems(menuArray);
      } else {
        //get filtered array
        const filteredArray = menuArray.filter((item) => {
          return item.category === evt.target.dataset.id;
        });

        //display the filtered items
        displayItems(filteredArray);
      }
    });

    //append the btn element
    btnContainerEl.appendChild(btn);
    console.log(btnContainerEl);
  });
}
