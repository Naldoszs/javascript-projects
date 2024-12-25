//create random hex code

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnElement = document.querySelector(".js-btn");

const color = document.querySelector(".js-color");

btnElement.addEventListener("click", () => {
  const randomHex = getRandom6HexCode();
  console.log(randomHex);

  document.body.style.backgroundColor = randomHex;
  color.innerText = randomHex;
});

//function to get random num

function getRandom6HexCode() {
  let hexCode = "#"; //to start with
  for (let i = 0; i < 6; i++) {
    hexCode += hex[getRandomNum()];
  }
  return hexCode;
}

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}
