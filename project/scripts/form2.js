const formInputs = document.querySelectorAll("input");
const button = document.querySelector('input[type="submit"]')

let formArray = [];

button.addEventListener("click", function () {

    formArray = [];

    formInputs.forEach(input => {

        if (input.type === "text" || input.type === "tel" || input.type === "email" || input.type === "date") {
            
            let label = getLabelText
            formArray.push({ label: labelText, value: input.value });
            setFormArray();
        } else if (input.type === "radio" && input.checked) {

            let label = get
            formArray.push(input.value);
            setFormArray();
        }
    })
})

function getLabelText(input) {
    // Try using <label for="inputId">
    let label = document.querySelector(`label[for="${input.id}"]`);
    label.innerText.trim();
}

function setFormArray() {
    localStorage.setItem('formArray', JSON.stringify(formArray));
}
