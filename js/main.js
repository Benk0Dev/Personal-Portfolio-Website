window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const oneEmInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (window.scrollY > oneEmInPixels) {
        header.style.setProperty('position', 'fixed');
        header.style.top = '0';
        header.style.borderBottom = '2px solid var(--fg-color)';
    } else {
        header.style.setProperty('position', '');
        header.style.top = '';
        header.style.borderBottom = '';
    }
});



const sunIcon = '<i class="uil uil-sun"></i>';
const moonIcon = '<i class="uil uil-moon"></i>';

function setTheme(themeBefore) {
    const colors = document.querySelector(':root');

    if (themeBefore === 'dark') {
        colors.style.setProperty('--bg-color', '');
        colors.style.setProperty('--secondary-bg-color', '');
        colors.style.setProperty('--tertiary-bg-color', '');
        colors.style.setProperty('--lighter-gradient-color', '');
        colors.style.setProperty('--darker-gradient-color', '');
        colors.style.setProperty('--fg-color', '');
        colors.style.setProperty('--secondary-fg-color', '');
        colors.style.setProperty('--tertiary-fg-color', '');
        colors.style.setProperty('--highlight-color', '');
        colors.style.setProperty('--secondary-highlight-color', '');
        colors.style.setProperty('--footer-color', '');
        colors.style.setProperty('--scroll-bar-color', '');
        colors.style.setProperty('--hover-bg-color', '');
        colors.style.setProperty('--form-input-color', '');
        colors.style.setProperty('--error-color', '');
        localStorage.setItem('theme', 'light');
    } else if (themeBefore === 'light') {
        colors.style.setProperty('--bg-color', 'hsl(0, 0.00%, 0.00%)');
        colors.style.setProperty('--secondary-bg-color', 'hsl(0, 0.00%, 5%)');
        colors.style.setProperty('--tertiary-bg-color', 'hsl(0, 0.00%, 16.50%)');
        colors.style.setProperty('--lighter-gradient-color', 'hsl(0, 0.00%, 10.20%)');
        colors.style.setProperty('--darker-gradient-color', 'black');
        colors.style.setProperty('--fg-color', 'hsl(0, 0.00%, 100.00%)');
        colors.style.setProperty('--secondary-fg-color', 'hsl(0, 0.00%, 84.70%)');
        colors.style.setProperty('--tertiary-fg-color', 'hsl(0, 0.00%, 63.50%)');
        colors.style.setProperty('--highlight-color', 'hsl(60, 100.00%, 50.00%)');
        colors.style.setProperty('--secondary-highlight-color', 'hsl(60, 100.00%, 38.00%)');
        colors.style.setProperty('--footer-color', 'hsl(0, 0.00%, 86.30%)');
        colors.style.setProperty('--scroll-bar-color', 'hsla(0, 0.00%, 7.80%, 0.50)');
        colors.style.setProperty('--hover-bg-color', 'hsla(0, 0.00%, 100.00%, 0.05)');
        colors.style.setProperty('--form-input-color', 'hsl(0, 0.00%, 15%)');
        colors.style.setProperty('--error-color', 'hsl(0, 70%, 50%)');
        localStorage.setItem('theme', 'dark');
    }
}

let button = document.querySelector('.color-theme-button');

if (localStorage.getItem('theme') === 'light') {
    button.innerHTML = sunIcon;
    setTheme('dark');
} else if (localStorage.getItem('theme') === 'dark') {
    button.innerHTML = moonIcon;
    setTheme('light');
} else {
    button.innerHTML = sunIcon;
    setTheme('dark');
    localStorage.setItem('theme', 'light');
}

button.addEventListener('click', () => {
    const themeBefore = localStorage.getItem('theme');
    if (themeBefore === 'dark') {
        button.innerHTML = sunIcon;
    } else if (themeBefore === 'light') {
        button.innerHTML = moonIcon;
    }
    setTheme(themeBefore);
});



const navButton = document.querySelector('.nav-button');
const exitNavButton = document.querySelector('.exit-nav-button');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

navButton.addEventListener('click', () => {
    navMenu.style.left = '0';
});

exitNavButton.addEventListener('click', () => {
    navMenu.style.left = '';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.left = '';
    });
});

document.addEventListener('click', (event) => {
    const target = event.target;
    const navMenu = document.querySelector('#nav-menu');
    const navButton = document.querySelector('.nav-button');
    if (!navMenu.contains(target) && !navButton.contains(target)) {
        navMenu.style.left = '';
    }
});



const skillGroupHeadings = document.querySelectorAll('.skills-group');
const groupArrows = document.querySelectorAll('.group-arrow');
const skillsLists = document.querySelectorAll('.skills-list');

skillGroupHeadings.forEach((groupHeading, index) => {
    groupHeading.addEventListener('click', () => {
        const displayValue = window.getComputedStyle(skillsLists[index]).display;
        if (displayValue === 'none') {
            skillsLists[index].style.display = 'block';
            groupArrows[index].classList.add('rotated');
            skillGroupHeadings.forEach((heading, i) => {
                if (i !== index) {
                    skillsLists[i].style.display = '';
                    groupArrows[i].classList.remove('rotated');
                }
            });
        } else {
            skillsLists[index].style.display = '';
            groupArrows[index].classList.remove('rotated');
        }
    });
});
