const bookmarkButtons = document.querySelectorAll("[data-js='btn_bookmark_quiz']");
const answerButtons = document.querySelectorAll("[data-js='btn_show_answer']");

console.log(answerButtons);

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const image = button.querySelector("i");
    image.classList.toggle("ph-fill");
    image.classList.toggle("ph");
  });
});

answerButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const answer = button.previousElementSibling;
    answer.classList.toggle("hidden");
    if (answer.classList.contains("hidden")) {
      button.textContent = "Show Answer";
    } else {
      button.textContent = "Hide Answer";
    }
  });
})