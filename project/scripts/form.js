const form = document.querySelector("booking-form");
const button = document.querySelector('input[type="submit"]')
const formInputs = document.querySelectorAll("input");

let formArray = [];

button.addEventListener("click", function () {
    formInputs.forEach(input => {
        if (input.type === "text" || input.type === "tel" || input.type === "email" || input.type === "date") {
            formArray.push(input.value);
            setFormArray();
        } else if (input.type === "radio" && input.checked) {
            formArray.push(input.value);
            setFormArray();
        }
    })
})

function setFormArray() {
    localStorage.setItem('formaArray', JSON.stringify(formArray));
}