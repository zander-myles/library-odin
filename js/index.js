let library = [];

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}

const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const bookTitle = document.querySelectorAll("header.title");
const bookInfoSection = document.querySelector(".book-info-section");
const exitButton = document.querySelector(".exit-button");
const closeBookButton = document.querySelector(".open-button");

const form = document.querySelector("form");
const authorInput = document.querySelector("input[id=author]");
const titleInput = document.querySelector("input[id=title]");
const pagesInput = document.querySelector("input[id=pages]");
const genreInput = document.querySelector("select[id=genre]");
const statusInput = document.querySelector("input[id=status]");

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
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value, genreInput.value, statusInput.value);
    library.push(book);
})