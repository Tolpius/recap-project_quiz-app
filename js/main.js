const newForm = document.querySelector("[data-js='form_new_question']");
const appContainer = document.querySelector("[data-js='container_app']");

//console.log({ appContainer });

appContainer.addEventListener("click", (event) => {
  //console.log({ event });
  if (event.target.matches("[data-js='btn_show_answer']")) {
    const button = event.target;
    const answer = button.previousElementSibling;
    answer.classList.toggle("hidden");
    button.textContent = answer.classList.contains("hidden")
      ? "Show Answer"
      : "Hide Answer";
  }
  else if (event.target.matches("[data-js='btn_bookmark_quiz']")) {
    event.target.classList.toggle("ph-fill");
    event.target.classList.toggle("ph");
  }
  else if (event.target.matches('[data-js="toggle_darkMode"]'))
  {console.log("Toggle DarkMode Klicked!")}
});

newForm.addEventListener("submit", (event) => {
  //console.log({ event });
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries(formData));
  //console.log(data);
  newQuestion = document.createElement("div");
  newQuestion.classList.add("container_quiz");
  newQuestion.innerHTML = `
        <button data-js="btn_bookmark_quiz" class="ph-fill ph-bookmark">
        </button>
        <div class="container_question">
          <h3 class="question">${data.question}</h3>
        </div>
        <div class="container_answer">
          <div class="answer hidden">${data.answer}</div>
          <button class="btn_show-answer" data-js="btn_show_answer">
            Show Answer
          </button>
        </div>
        <div class="container_tags">
          <ul>
            <li><p class="tag">#${data.tag1}</p></li>
          </ul>
        </div>
  `;
  appContainer.append(newQuestion);

  newForm.reset();
  const charCounters = document.querySelectorAll('[data-js="char-counter"]');
  charCounters.forEach(
    (charCounter) => (charCounter.textContent = "150 Zeichen übrig")
  );
});

newForm.addEventListener("input", (event) => {
  const input = event.target;
  if (event.target.matches(".input_big")) {
    const maxLength = input.maxLength;
    const used = input.value.length;
    const remaining = maxLength - used;
    const charCounter = event.target.nextElementSibling;
    charCounter.textContent = `${remaining} Zeichen übrig`;
  }
});
