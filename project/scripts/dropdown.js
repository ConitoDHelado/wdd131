const questions = document.querySelectorAll(".question");

const answers = document.querySelectorAll(".answer");

const arrows = document.querySelectorAll(".arrow");

questions.forEach((question, i) => {
    const answer = answers[i];
    const arrow = arrows[i];
    question.addEventListener("click", function () {
        arrow.classList.toggle('open')
        if (window.getComputedStyle(answer).display === "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none"
        };
    });
});

