const spanElement = document.querySelector(".js-value");
const btnEls = document.querySelectorAll(".btn");

btnEls.forEach((button) => {
  button.addEventListener("click", (evt) => {
    const number = Number(spanElement.innerHTML);
    if (evt.target.classList.contains("js-increase-btn")) {
      spanElement.innerHTML++;
    } else if (evt.target.classList.contains("js-decrease-btn")) {
      if (number === 0) {
        spanElement.innerHTML = 0;
      } else {
        spanElement.innerHTML--;
      }
    } else {
      spanElement.innerHTML = 0;
    }
  });
});
