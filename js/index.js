const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const bookTitle = document.querySelectorAll("header.title");
const bookInfoSection = document.querySelectorAll(".book-info-section");
const form = document.querySelector("form");
const exitButton = document.querySelector(".exit-button");

newButton.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

exitButton.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
    bookInfoSection.forEach(book => {
        book.style.display = none;
    })
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formContainer.style.visibility = "hidden";
})