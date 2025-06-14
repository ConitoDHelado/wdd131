const formInputs = document.querySelectorAll("input");
const button = document.querySelector('input[type="submit"]')

let formArray = [];

button.addEventListener("click", function () {

    formArray = [];

    formInputs.forEach(input => {

        if (input.type === "text" || input.type === "tel" || input.type === "email" || input.type === "date") {
            
            let labelText = getLabelText(input);
            formArray.push({label: labelText, value: input.value });
            setFormArray();
        } else if (input.type === "radio" && input.checked) {

            let labelText = getGroupLabel(input);
            formArray.push({label: labelText, value: input.value });
            setFormArray();
        }
    })
})

function getLabelText(input) {
    // Try using <label for="inputId">
    let label = document.querySelector(`label[for="${input.id}"]`);
    return label.innerText.trim();
}

function getGroupLabel(input) {
    let groupContainer = input.closest("div");
    return groupContainer.textContent


}

function setFormArray() {
    localStorage.setItem('formArray', JSON.stringify(formArray));
}
