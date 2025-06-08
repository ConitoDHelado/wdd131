const reviewCounter = document.querySelector("#counter");
const button = document.querySelector("#button");

let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;

button.addEventListener("click", () => {
    numReviews++;
    if (numReviews !== 1) {
        reviewCounter.textContent = numReviews;
        localStorage.setItem("numReviews-ls", numReviews);
    } else {
        reviewCounter.textContent = "This is your first review. 🥳 Well done!"
    };
});