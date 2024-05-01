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
        colors.style.setProperty('--fg-color', '');
        colors.style.setProperty('--secondary-fg-color', '');
        colors.style.setProperty('--tertiary-fg-color', '');
        colors.style.setProperty('--highlight-color', '');
        colors.style.setProperty('--secondary-highlight-color', '');
        colors.style.setProperty('--footer-color', '');
        colors.style.setProperty('--bottom-footer-color', '');
        colors.style.setProperty('--scroll-bar-color', '');
        colors.style.setProperty('--hover-bg-color', '');
        colors.style.setProperty('--form-input-color', '');
        colors.style.setProperty('--error-color', '');
        colors.style.setProperty('--extra-color-1', '');
        colors.style.setProperty('--extra-color-2', '');
        document.querySelector('.logo-icon').style.color = 'hsl(40, 84%, 25%)';
        document.querySelector('footer').style.color = 'white';
        document.querySelector('.footer-container').style.color = 'white';
        document.querySelector('footer .logo span').style.color = 'white';
        localStorage.setItem('theme', 'light');
    } else if (themeBefore === 'light') {
        colors.style.setProperty('--bg-color', 'hsl(224, 16%, 15%)');
        colors.style.setProperty('--secondary-bg-color', 'hsl(224, 10%, 20%)');
        colors.style.setProperty('--tertiary-bg-color', 'hsl(224, 16%, 20%)');
        colors.style.setProperty('--fg-color', 'hsl(224, 16%, 70%)');
        colors.style.setProperty('--secondary-fg-color', 'hsl(224, 16%, 60%)');
        colors.style.setProperty('--tertiary-fg-color', 'hsl(224, 16%, 50%)');
        colors.style.setProperty('--highlight-color', 'hsl(254, 80%, 60%)');
        colors.style.setProperty('--secondary-highlight-color', 'hsl(254, 80%, 58%)');
        colors.style.setProperty('--footer-color', 'hsl(254, 16%, 8%)');
        colors.style.setProperty('--bottom-footer-color', 'hsl(254, 16%, 4%)');
        colors.style.setProperty('--scroll-bar-color', 'hsla(224, 16%, 60%, 0.5)');
        colors.style.setProperty('--hover-bg-color', 'hsla(224, 16%, 70%, 0.15)');
        colors.style.setProperty('--form-input-color', 'hsl(224, 10%, 25%)');
        colors.style.setProperty('--error-color', 'hsl(0, 70%, 50%)');
        colors.style.setProperty('--extra-color-1', 'hsl(50, 70%, 65%)');
        colors.style.setProperty('--extra-color-2', 'hsl(40, 70%, 65%)');
        document.querySelector('.logo-icon').style.color = '';
        document.querySelector('footer').style.color = '';
        document.querySelector('.footer-container').style.color = '';
        document.querySelector('footer .logo span').style.color = '';
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



const skillGroupHeadings = document.querySelectorAll('.skills-group-heading');
const groupArrows = document.querySelectorAll('.group-arrow');
const skillsLists = document.querySelectorAll('.skills-list');

skillGroupHeadings.forEach((groupHeading, index) => {
    groupHeading.addEventListener('click', () => {
        const displayValue = window.getComputedStyle(skillsLists[index]).display;
        if (displayValue === 'none') {
            skillsLists[index].style.display = 'block';
            groupArrows[index].classList.add('rotated');
        } else {
            skillsLists[index].style.display = '';
            groupArrows[index].classList.remove('rotated');
        }
    });
});



const educationButton = document.querySelector('#education-button');
const experienceButton = document.querySelector('#experience-button');
const education = document.querySelector('.education');
const experience = document.querySelector('.experience');

educationButton.addEventListener('click', () => {
    education.style.display = '';
    experience.style.display = '';
    experienceButton.classList.remove('selected');
    educationButton.classList.add('selected');
});

experienceButton.addEventListener('click', () => {
    education.style.display = 'none';
    experience.style.display = 'flex';
    educationButton.classList.remove('selected');
    experienceButton.classList.add('selected');
});



const projectTitles = document.querySelectorAll('.project-title');
const descriptionArrows = document.querySelectorAll('.description-arrow');
const descriptions = document.querySelectorAll('.project article');

projectTitles.forEach((projectTitle, index) => {
    projectTitle.addEventListener('click', () => {
        const displayValue = window.getComputedStyle(descriptions[index]).display;
        if (displayValue === 'none') {
            descriptions[index].style.display = 'block';
            descriptionArrows[index].classList.add('rotated');
        } else {
            descriptions[index].style.display = '';
            descriptionArrows[index].classList.remove('rotated');
        }
    });
});



const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelectorAll('.error');

form.addEventListener('submit', (event) => {
    if (fname.value === '' || lname.value === '' || email.value === '' || message.value === '') {
        event.preventDefault();
        if (fname.value === '') {
            error[0].style.display = 'inline';
        }
        if (lname.value === '') {
            error[1].style.display = 'inline';
        }
        if (email.value === '') {
            error[2].style.display = 'inline';
        }
        if (message.value === '') {
            error[3].style.display = 'inline';
        }
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            event.preventDefault();
            error[2].style.display = 'inline';
        }
    }
});

window.addEventListener('pageshow', function() {
    if (sessionStorage.getItem('formSubmitted')) {
        document.getElementById('myForm').reset();
        sessionStorage.removeItem('formSubmitted');
    }
});

fname.addEventListener('input', () => {
    error[0].style.display = '';
});

lname.addEventListener('input', () => {
    error[1].style.display = '';
});

email.addEventListener('input', () => {
    error[2].style.display = '';
});

message.addEventListener('input', () => {
    error[3].style.display = '';
});
