const list = document.querySelector("#reservation-details");

let formArray = getFormArray();

formArray.forEach(item => displayReservationDetails(item));

function displayReservationDetails(item) {
    document.querySelectorAll("reservation").innerHTML=`<span>${item}</span>`;
    let li = document.createElement("li");
    li.textContent = item.label+": "+item.value;
    list.appendChild(li);
}

function getFormArray() {
    return JSON.parse(localStorage.getItem('formArray'));
}