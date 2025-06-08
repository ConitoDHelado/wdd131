const reviewCounter = document.querySelector("#counter");

let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;

if (numReviews === 1) {
    reviewCounter.textContent = "This is your first review. 🥳 Well done!"
} else {
    reviewCounter.textContent = numReviews;
};
