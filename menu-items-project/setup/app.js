import { menuItems } from "./data.js";
import calculateMoney from "./money.js";

// get the section center class element
let sectionCenter = document.querySelector(".section-center");
// get the filter buttons

window.addEventListener("DOMContentLoaded", () => {
  createFilterBtn(menuItems);
  //pass in the menuItems as a array parameter
  displayMenuItems(menuItems);
});

//function display all menu items based on array
// Function to display all menu items based on the array
function displayMenuItems(menuArray) {
  // Clear existing items before adding new ones
  sectionCenter.innerHTML = "";

  // Display all menu items
  menuArray.forEach((menuItem) => {
    const { id, title, category, priceCent, img, desc } = menuItem;
    const menuItemHTML = `
      <article class="menu-item">
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
      </article>
    `;
    sectionCenter.innerHTML += menuItemHTML;
  });
}
// adding event on the filter buttons based on category
// function to create a button if the category exist

function createFilterBtn(menuArray) {
  //initializing the button
  let btn;

  //get unique categories
  const uniqueCategories = [
    "all",
    ...new Set(
      menuArray.map((item) => {
        return item.category;
      })
    ),
  ];

  //create the necessary buttons

  //get the btn container
  const btnContainerEl = document.querySelector(".js-btn-container");
  //remove items originally in the btn container
  btnContainerEl.innerHTML = "";

  uniqueCategories.forEach((category) => {
    if (!category) {
      return;
    } else {
      //create btn
      btn = document.createElement("button");
      // add class to the btn
      btn.classList.add("filter-btn");
      //add attribute to the btn
      btn.setAttribute("type", "button");
      //add text content to the btn
      btn.innerText = category;
      //add data set attribute to the btn
      btn.setAttribute("data-id", `${category}`);

      //add event listener on the filter btn
      btn.addEventListener("click", function (evt) {
        // console.log(evt.target.dataset.id);
        if (evt.target.dataset.id === "all") {
          displayMenuItems(menuArray);
        } else {
          //filter the menu
          const filteredMenu = menuArray.filter((menuitem) => {
            return menuitem.category === evt.target.dataset.id;
          });
          console.log(filteredMenu);
          //display it
          displayMenuItems(filteredMenu);
        }
      });

      // append the btns to the btn container
      btnContainerEl.appendChild(btn);
    }
  });
}
