const main = document.querySelector('main');
const stickySection = document.querySelector('.sticky-section');
const em = parseFloat(getComputedStyle(document.documentElement).fontSize);

function adjustSticky() {
    if (window.innerWidth < 770) return;
    if (window.innerHeight >= main.getBoundingClientRect().bottom) {
        console.log("bottom");
        stickySection.classList.remove('sticky');
        stickySection.style.paddingTop = `${main.getBoundingClientRect().height - window.innerHeight + (5 + 0.15) * em}px`;
    } else {
        console.log("top");
        stickySection.classList.add('sticky');
        stickySection.style.paddingTop = '';
    }
}

window.addEventListener('scroll', adjustSticky);

window.addEventListener('resize', () => {
    if (window.innerWidth < 770) {
        stickySection.classList.remove('sticky');
        stickySection.style.paddingTop = '';
    } else {
        adjustSticky();
    }
});

adjustSticky();