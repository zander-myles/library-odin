const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const exitButton = document.querySelector(".exit-button");

newButton.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

exitButton.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formContainer.style.visibility = "hidden";
})