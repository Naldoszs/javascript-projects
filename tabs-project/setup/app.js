// || GET ELEMENTS
//get about
const aboutEl = document.querySelector(".about");

//get the btns nodelist
const btnEls = document.querySelectorAll(".tab-btn");

//get articles [all]

const articleEls = document.querySelectorAll(".content");

//add event listener to about

aboutEl.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  //set comditionals
  if (id) {
    btnEls.forEach((btnEl) => {
      btnEl.classList.remove("active"); //removes from all btns
      e.target.classList.add("active"); //adds to current item clicked on
    });
    //forEach ends
    //hide oteher articles
    articleEls.forEach((articleEl) => {
      articleEl.classList.remove("active"); // remove from all articles
    });
    //getting the correspodig element u cliked on
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
