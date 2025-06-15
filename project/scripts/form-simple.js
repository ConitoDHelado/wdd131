const formInputs = document.querySelectorAll("input");
const button = document.querySelector('input[type="submit"]')

let formArray = [];

button.addEventListener("click", function () {

    formArray = [];

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
    localStorage.setItem('formArray', JSON.stringify(formArray));
}