const appContainer = document.querySelector("[data-js='container_app']");

//console.log({ appContainer });

appContainer.addEventListener("click", (event) => {
  //console.log({ event });
  //***SHOW ANSWER BUTTON***
  if (event.target.matches("[data-js='btn_show_answer']")) {
    const button = event.target;
    const answer = button.previousElementSibling;
    answer.classList.toggle("hidden");
    button.textContent = answer.classList.contains("hidden")
      ? "Show Answer"
      : "Hide Answer";
  }
  //***BOOKMARK SELECTED QUESTION***
  else if (event.target.matches("[data-js='btn_bookmark_quiz']")) {
    event.target.classList.toggle("ph-fill");
    event.target.classList.toggle("ph");
  }
});