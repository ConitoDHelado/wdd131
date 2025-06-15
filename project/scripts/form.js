const formInputs = document.querySelectorAll("input");
const button = document.querySelector('input[type="submit"]')
const form = document.querySelector('.booking-form'); 

form.addEventListener("submit", function() {


    let formArray = [];

    form.querySelectorAll("input").forEach(input => {
        if (input.type === "text" || input.type === "tel" || input.type === "email" || input.type === "date") {
            let labelText = getLabelText(input);
            formArray.push({ label: labelText, value: input.value });
        } else if (input.type === "radio" && input.checked) {
            let labelText = getGroupLabel(input);
            formArray.push({ label: labelText, value: input.value });
        }
    });

    setFormArray(formArray);
});

function getLabelText(input) {
    let labelText = input.parentElement.childNodes[0].textContent.trim();
    return labelText.replace(/\*/g, '').trim();
}

function getGroupLabel(input) {
    return input.name;
}

function setFormArray(formArray) {
    localStorage.setItem('formArray', JSON.stringify(formArray));
}
