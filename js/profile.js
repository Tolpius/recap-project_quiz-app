const darkModeSwitch = document.querySelector("[data-js='toggle_darkMode']");

darkModeSwitch.addEventListener("click", () => {
document.body.classList.toggle("dark");
})