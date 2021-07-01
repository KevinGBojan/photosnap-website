const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menu.style.display='flex';
        overlay.style.display="flex";
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu.style.display='none';
        overlay.style.display="none";
    }
});