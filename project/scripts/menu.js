const nav = document.querySelector('#mobile-nav .nav-list');
const hambtn = document.querySelector('#ham-menu');

hambtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    hambtn.classList.toggle('open');
})