//get the buttons
const plusIconBtn = document.querySelectorAll(".js-question-btn");

//opemimg th first question on dom content loaded
window.addEventListener("load", function () {
  //get the first article
  const firstArticleElement = document.querySelector("article");
  firstArticleElement.classList.add("show-text");
});

// looping over the buttons
plusIconBtn.forEach((plusButton) => {
  plusButton.addEventListener("click", showText);
});

//function to show text
function showText(e) {
  //get the question-text
  const articleElementSelected = e.currentTarget.parentElement.parentElement;

  //looping throught the articles to see the one not selected
  const articleElements = document.querySelectorAll("article");

  articleElements.forEach((article) => {
    if (articleElementSelected !== article) {
      article.classList.remove("show-text");
    }
  });

  articleElementSelected.classList.toggle("show-text");
}
