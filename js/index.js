const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");
const exitButton = document.querySelector(".exit-button");

newButton.addEventListener("click", () => {
    if (formContainer.style.visibility === "hidden") {
        formContainer.style.visibility = "visible";
    } else {
        formContainer.style.visibility = "hidden";
    }
})

exitButton.addEventListener("click", () => {
    if (formContainer.style.visibility === "hidden") {
        formContainer.style.visibility = "visible";
    } else {
        formContainer.style.visibility = "hidden";
    }
})