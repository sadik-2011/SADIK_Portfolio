AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    offset: 120
});

const glowBg = document.getElementById('mouseGlowBg');
const followerRing = document.getElementById('mouseFollowerRing');
const followerDot = document.getElementById('mouseFollowerDot');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let glowX = 0, glowY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    followerDot.style.left = mouseX + 'px';
    followerDot.style.top = mouseY + 'px';
});

function tick() {
    ringX += (mouseX - ringX) * 0.8;
    ringY += (mouseY - ringY) * 0.8;
    followerRing.style.left = ringX + 'px';
    followerRing.style.top = ringY + 'px';

    glowX += (mouseX - glowX) * 0.05;
    glowY += (mouseY - glowY) * 0.05;
    glowBg.style.left = glowX + 'px';
    glowBg.style.top = glowY + 'px';

    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

const interactiveElements = document.querySelectorAll('a, button, .service-card, .skill-item, .education-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        followerRing.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        followerRing.classList.remove('hovered');
    });
});

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function () {

        // Clear form after submit
        setTimeout(() => {
            contactForm.reset();
        }, 100);

    });
    const typingElement = document.querySelector(".typing-text");

const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Freelance Web Developer",
    "JavaScript Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
   const scrollTop = window.scrollY;
   const docHeight = document.body.scrollHeight - window.innerHeight;
   const progress = (scrollTop / docHeight) * 100;

   progressBar.style.width = progress + "%";
});
