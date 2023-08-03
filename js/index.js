let library = [
{
    title: "A Trip to Vietnam",
    author: "Zander Sacay",
    pages: 456,
    genre: "Action",
    status: "Completed"
},
{
    title: "Welcome Home",
    author: "Wawa Cat",
    pages: 789,
    genre: "Romance",
    status: "Not Completed"
}];

const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const bookTitle = document.querySelectorAll("header.title");
const bookInfoSection = document.querySelector(".book-info-section");
const exitButton = document.querySelector(".exit-button");
const closeBookButton = document.querySelector(".open-button");
const bookshelf = document.querySelector(".bookshelf");

const form = document.querySelector("form");
const authorInput = document.querySelector("input[id=author]");
const titleInput = document.querySelector("input[id=title]");
const pagesInput = document.querySelector("input[id=pages]");
const genreInput = document.querySelector("select[id=genre]");
const statusInput = document.querySelector("input[id=status]");

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}

function displayBook(book) {
    let section = document.createElement("section");
    section.className = "book";
    let bkTitle = document.createElement("header");
    bkTitle.className = "title";
    bkTitle.textContent = book.title;
    section.appendChild(bkTitle);
    let openBtn = document.createElement("img");
    openBtn.className = "open-button";
    openBtn.src = "img/svg/plus-svgrepo-com.svg";
    openBtn.addEventListener("click", ()=>{
        if (bookInfoSectionDiv.classList.contains("open")) {
            bookInfoSectionDiv.style.display = "none";
        } else {
            bookInfoSectionDiv.style.display = "flex";
        }
        bookInfoSectionDiv.classList.toggle("open");
    })
    section.appendChild(openBtn);
    let bookInfoSectionDiv = document.createElement("div");
    bookInfoSectionDiv.className = "book-info-section";
    section.appendChild(bookInfoSectionDiv);
    let infoContainer1 = document.createElement("div");
    infoContainer1.className = "info-container";
    bookInfoSectionDiv.appendChild(infoContainer1);
    let label1 = document.createElement("p");
    label1.className = "author-label";
    label1.textContent = "Author:";
    infoContainer1.appendChild(label1);
    let label2 = document.createElement("p");
    label2.className = "author-text";
    label2.textContent = book.author;
    infoContainer1.appendChild(label2);
    let infoContainer2 = document.createElement("div");
    infoContainer2.className = "info-container";
    bookInfoSectionDiv.appendChild(infoContainer2);
    let label3 = document.createElement("p");
    label3.className = "pages-label";
    label3.textContent = "Pages:";
    infoContainer2.appendChild(label3);
    let label4 = document.createElement("p");
    label4.className = "pages-text";
    label4.textContent = book.pages;
    infoContainer2.appendChild(label4);
    let infoContainer3 = document.createElement("div");
    infoContainer3.className = "info-container";
    bookInfoSectionDiv.appendChild(infoContainer3);
    let label5 = document.createElement("p");
    label5.className = "genre-label";
    label5.textContent = "Genre:";
    infoContainer3.appendChild(label5);
    let label6 = document.createElement("p");
    label6.className = "genre-text";
    label6.textContent = book.genre;
    infoContainer3.appendChild(label6);
    let infoContainer4 = document.createElement("div");
    infoContainer4.className = "info-container";
    bookInfoSectionDiv.appendChild(infoContainer4);
    let label7 = document.createElement("p");
    label7.className = "status-label";
    label7.textContent = "Status:";
    infoContainer4.appendChild(label7);
    let label8 = document.createElement("p");
    label8.className = "status-text";
    label8.textContent = book.status;
    infoContainer4.appendChild(label8);
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", ()=>{
        for (let i=0; i<library.length; i++) {
            if (library[i].title === bkTitle.textContent) {
                library.splice(i, 1);
            }
        }
        bookshelf.removeChild(section);
    })
    bookInfoSectionDiv.appendChild(deleteBtn);
    bookshelf.appendChild(section);
}

for (let i=0; i<library.length; i++) {
    displayBook(library[i]);
}



newButton.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
})

exitButton.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formContainer.style.visibility = "hidden";
    if (statusInput.checked) {
        let book = new Book(titleInput.value, authorInput.value, pagesInput.value, genreInput.value, "Completed");
        library.push(book);
    } else {
        let book = new Book(titleInput.value, authorInput.value, pagesInput.value, genreInput.value, "Not Completed");
        library.push(book);
    }
    form.reset();
    displayBook(library[library.length - 1]);
})