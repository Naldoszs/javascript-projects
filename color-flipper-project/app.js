// create array of random colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnElement2 = document.querySelector(".js-btn");

const color = document.querySelector(".js-color");

btnElement2.addEventListener("click", () => {
  //get num btwn 0 and 3
  const randomNumber = getRandomNum();

  //getting the body element
  document.documentElement.firstElementChild.nextElementSibling.style.backgroundColor =
    colors[randomNumber];

  color.textContent = colors[randomNumber];
});

//function to get random num
function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
