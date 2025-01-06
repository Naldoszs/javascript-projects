// Select items
const alertEl = document.querySelector(".js-alert"); // shows alert
const formEl = document.querySelector(".js-grocery-form"); // gets form
const inputEl = document.querySelector("#grocery"); // gets input
const submitBtnEl = document.querySelector(".js-submit-btn");
const groceryContainerEl = document.querySelector(".js-grocery-container"); // gets ul grocery container
const listItemEl = document.querySelector(".js-grocery-list"); // gets the list container
const clearBtnEl = document.querySelector(".js-clear-btn"); // gets clear btn
let val;

// On page refresh
document.addEventListener("DOMContentLoaded", setupItems);

// Edit options
let editElement;
let editFlag = false; // to start with
let editID = "";

// --------------------------- SET-UPS -------------------------
// Event listeners
formEl.addEventListener("submit", addItem);
clearBtnEl.addEventListener("click", clearAllItems);

// --------------------------- FUNCTIONS -------------------------
// Function to add item
function addItem(e) {
  e.preventDefault();
  // Get the value in the input
  val = inputEl.value.trim();

  if (val !== "" && !editFlag) {
    // Generate a list item
    const id = new Date().getTime().toString(); // Generate unique ID
    generateListItem(id, val);
    // Add to local storage
    addToLocalStorage(id, val);
    // Set success alert
    displayAlert(
      "Item successfully added to the list",
      () => alertEl.classList.add("alert-success"),
      () => alertEl.classList.remove("alert-success")
    );
    // Set back to default state
    setBackToDefault();
  } else if (val !== "" && editFlag) {
    // Editing an item
    editElement.textContent = val; // Update DOM text
    editItemInLocalStorage(editID, val); // Update local storage
    displayAlert(
      "Edited successfully",
      () => alertEl.classList.add("alert-success"),
      () => alertEl.classList.remove("alert-success")
    );
    setBackToDefault(); // Reset form since done editing
  } else {
    // Empty value alert
    displayAlert(
      "Empty value",
      () => alertEl.classList.add("alert-danger"),
      () => alertEl.classList.remove("alert-danger")
    );
  }
}

// Function to generate a new list item
function generateListItem(id, value) {
  // Ensure the container is visible
  groceryContainerEl.classList.add("show-container");

  // Create a new article for the grocery item
  const newGroceryItem = document.createElement("article");
  newGroceryItem.classList.add("js-grocery-item", "grocery-item");
  newGroceryItem.setAttribute("data-id", id);

  // Set the inner HTML dynamically
  newGroceryItem.innerHTML = `
    <p class="js-title title">${value}</p>
    <div class="js-btn-container btn-container">
      <button type="button" class="js-edit-btn edit-btn" title="Edit" data-id="${id}">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="js-delete-btn delete-btn" title="Delete" data-id="${id}">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

  // Add functionality to edit and delete buttons
  const editBtn = newGroceryItem.querySelector(".js-edit-btn");
  editBtn.addEventListener("click", editItem);

  const deleteBtn = newGroceryItem.querySelector(".js-delete-btn");
  deleteBtn.addEventListener("click", () => deleteItem(id, newGroceryItem));

  // Append the new item to the list
  listItemEl.appendChild(newGroceryItem);
}

// Function to delete an individual item
function deleteItem(id, element) {
  // Remove the item from the DOM
  element.remove();

  // Remove the item from local storage
  removeItemsFromStorage(id);

  // Display alert for item removal
  displayAlert(
    "Item removed!",
    () => alertEl.classList.add("alert-danger"),
    () => alertEl.classList.remove("alert-danger")
  );

  // Check if there are any remaining items
  if (listItemEl.children.length === 0) {
    groceryContainerEl.classList.remove("show-container");
  }
}

// Function to edit item
function editItem(e) {
  // Get the article and its data
  const article = e.currentTarget.closest("article");
  const id = article.dataset.id;
  const title = article.querySelector(".js-title"); // Gets the paragraph

  // Populate the input field with the existing text
  inputEl.value = title.textContent;

  // Set edit mode
  editElement = title; // editElement is the paragraph
  editFlag = true; // Notifies we are in edit mode
  editID = id;

  // Change the submit button text
  submitBtnEl.textContent = "Edit";
}

// Function to display alert
function displayAlert(text, addClassAction, removeClassAction) {
  alertEl.textContent = text;
  addClassAction();

  setTimeout(() => {
    alertEl.textContent = "";
    removeClassAction();
  }, 2000);
}

// Function to set back to default
function setBackToDefault() {
  inputEl.value = "";
  editFlag = false; // Not editing
  editID = "";
  submitBtnEl.textContent = "Submit";
}

// Function to clear all items
function clearAllItems() {
  // Remove all items from the DOM
  listItemEl.innerHTML = "";

  // Hide the grocery container
  groceryContainerEl.classList.remove("show-container");

  // Remove all items from local storage
  removeItemsFromStorage(); // Remove all items

  // Display alert for clearing all items
  displayAlert(
    "All lists cleared!",
    () => alertEl.classList.add("alert-danger"),
    () => alertEl.classList.remove("alert-danger")
  );

  // Reset input and form to default state
  setBackToDefault();
}

// -------------------- LOCAL STORAGE -------------------
// Function to add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  const items = getLocalStorageIfExist();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// Function to remove items from local storage
function removeItemsFromStorage(id = null) {
  let items = getLocalStorageIfExist();

  if (id) {
    items = items.filter((item) => item.id !== id);
  } else {
    items = []; // Remove all items if no id is provided
  }

  localStorage.setItem("list", JSON.stringify(items));
}

// Function to edit an item in local storage
function editItemInLocalStorage(id, newVal) {
  const items = getLocalStorageIfExist();
  const updatedItems = items.map((item) =>
    item.id === id ? { ...item, value: newVal } : item
  );
  localStorage.setItem("list", JSON.stringify(updatedItems));
}

// Function to get local storage if it exists
function getLocalStorageIfExist() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// Function to set up stored items on page refresh
function setupItems() {
  const items = getLocalStorageIfExist();
  if (items.length > 0) {
    items.forEach((item) => {
      generateListItem(item.id, item.value);
    });
    groceryContainerEl.classList.add("show-container");
  }
}
