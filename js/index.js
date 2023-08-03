const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const bookTitle = document.querySelectorAll("header.title");
const bookInfoSection = document.querySelector(".book-info-section");
const form = document.querySelector("form");
const exitButton = document.querySelector(".exit-button");
const closeBookButton = document.querySelector(".open-button");

newButton.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

exitButton.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
})

closeBookButton.addEventListener("click", ()=>{
    if (bookInfoSection.classList.contains("open")) {
        bookInfoSection.style.display = "none";
    } else {
        bookInfoSection.style.display = "flex";
    }
    bookInfoSection.classList.toggle("open");
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formContainer.style.visibility = "hidden";
})