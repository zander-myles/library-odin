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

const sortButton = document.querySelector("select[id=sort]");
const orderButton = document.querySelector(".order-button");
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
    bookInfoSectionDiv.classList.add("book-info-section");
    bookInfoSectionDiv.classList.add("open");
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
    let label8 = document.createElement("button");
    label8.className = "status-text";
    label8.textContent = book.status;
    label8.addEventListener("click", ()=>{
        if (label8.textContent === "Completed") {
            label8.textContent = "Not Completed";
        } else {
            label8.textContent = "Completed";
        }
    })
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

function displayLibrary() {
    let books = document.querySelectorAll(".book");
    books.forEach(book => {bookshelf.removeChild(book)});
    for (let i=0; i<library.length; i++) {
        displayBook(library[i]);
    }
}

let sortedArray = [];
let tempLibrary = [];

function sortLibrary(type) {
    if (type === "title") {
        sortedArray = [];
        tempLibrary = [];
        for (let i=0; i<library.length; i++) {
            sortedArray.push(library[i].title);
        }
        sortedArray.sort();
        if (orderButton.classList.contains("descending")) {
            sortedArray.reverse();
        }
        for (let i=0; i<sortedArray.length; i++) {
            for (let j=0; j<library.length; j++) {
                if (library[j].title === sortedArray[i]) {
                    tempLibrary.push(library[j]);
                    library.splice(j, 1);
                }
            }
        }
        for (let i=0; i<tempLibrary.length; i++) {
            library.push(tempLibrary[i]);
        }
    }
    else if (type === "author") {
        sortedArray = [];
        tempLibrary = [];
        for (let i=0; i<library.length; i++) {
            sortedArray.push(library[i].author);
        }
        sortedArray.sort();
        if (orderButton.classList.contains("descending")) {
            sortedArray.reverse();
        }
        for (let i=0; i<sortedArray.length; i++) {
            for (let j=0; j<library.length; j++) {
                if (library[j].author === sortedArray[i]) {
                    tempLibrary.push(library[j]);
                    library.splice(j, 1);
                }
            }
        }
        for (let i=0; i<tempLibrary.length; i++) {
            library.push(tempLibrary[i]);
        }
    }
    else if (type === "pages") {
        sortedArray = [];
        tempLibrary = [];
        for (let i=0; i<library.length; i++) {
            sortedArray.push(library[i].pages);
        }
        sortedArray.sort((a,b) => (a-b));
        if (orderButton.classList.contains("descending")) {
            sortedArray.reverse();
        }
        for (let i=0; i<sortedArray.length; i++) {
            for (let j=0; j<library.length; j++) {
                if (library[j].pages === sortedArray[i]) {
                    tempLibrary.push(library[j]);
                    library.splice(j, 1);
                }
            }
        }
        for (let i=0; i<tempLibrary.length; i++) {
            library.push(tempLibrary[i]);
        }
    }
    else if (type === "genre") {
        sortedArray = [];
        tempLibrary = [];
        for (let i=0; i<library.length; i++) {
            sortedArray.push(library[i].genre);
        }
        sortedArray.sort();
        if (orderButton.classList.contains("descending")) {
            sortedArray.reverse();
        }
        for (let i=0; i<sortedArray.length; i++) {
            for (let j=0; j<library.length; j++) {
                if (library[j].genre === sortedArray[i]) {
                    tempLibrary.push(library[j]);
                    library.splice(j, 1);
                }
            }
        }
        for (let i=0; i<tempLibrary.length; i++) {
            library.push(tempLibrary[i]);
        }
    }
    displayLibrary();
}

sortButton.addEventListener("change", ()=>{
    sortLibrary(sortButton.value);
})

orderButton.addEventListener("click", ()=>{
    orderButton.classList.toggle("descending");
    if (orderButton.classList.contains("descending")) {
        orderButton.style.transform = "rotate(180deg)";
    } else {
        orderButton.style.transform = "";
    }
    sortLibrary(sortButton.value);
})

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

displayLibrary();