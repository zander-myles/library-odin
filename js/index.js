const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const bookInfoSection = document.querySelector(".book-info-section");
const form = document.querySelector("form");
const exitButton = document.querySelector(".exit-button");

newButton.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

exitButton.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
    bookInfoSection.style.display = "none";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formContainer.style.visibility = "hidden";
})