const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("for loop:");

for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

console.log("while loop:");

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
}

console.log("forEach loop:");

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

console.log("for... in loop:");

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

console.log("Days of the Week");

let date = NewDate();

