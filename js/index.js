const newButton = document.querySelector(".new-button");
const formContainer = document.querySelector(".form-container");

newButton.addEventListener("click", () => {
    if (formContainer.style.visibility === "hidden") {
        formContainer.style.visibility = "visible";
    } else {
        formContainer.style.visibility = "hidden";
    }
})