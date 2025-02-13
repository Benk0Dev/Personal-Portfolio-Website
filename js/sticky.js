const main = document.querySelector('main');
const stickySection = document.querySelector('.sticky-section');
let editTop = true;
const em = parseFloat(getComputedStyle(document.documentElement).fontSize);

window.addEventListener('scroll', () => {
    if (window.innerWidth < 770) return;
    if (window.innerHeight >= main.getBoundingClientRect().bottom) {
        if (editTop) {
            stickySection.style.position = 'relative';
            stickySection.style.top = `${-main.getBoundingClientRect().top + (5 + 0.15) * em}px`;
            editTop = false;
        }
    } else {
        stickySection.style.position = '';
        stickySection.style.top = '';
        editTop = true;
    }
});