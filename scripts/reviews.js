const reviewCounter = document.querySelector("#counter");

let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
    reviewCounter.textContent = numReviews+1;
} else {
    reviewCounter.textContent = "This is your first review. 🥳 Well done!"
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);