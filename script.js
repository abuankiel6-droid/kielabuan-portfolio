/* ===== MOBILE NAV ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

let overlay = document.createElement('div');
overlay.classList.add('nav__overlay');
document.body.appendChild(overlay);

function openMenu() {
    navMenu.classList.add('show-menu');
    overlay.classList.add('show-overlay');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navMenu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
    document.body.style.overflow = '';
}

if (navToggle) navToggle.addEventListener('click', openMenu);
if (navClose) navClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* ===== HEADER SCROLL SHADOW ===== */
const header = document.getElementById('header');

function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

window.addEventListener('scroll', handleHeaderScroll);

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

function handleActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (link) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', handleActiveLink);

/* ===== SCROLL UP BUTTON ===== */
const scrollUp = document.getElementById('scroll-up');

function handleScrollUp() {
    if (window.scrollY > 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', handleScrollUp);

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
    const animateElements = document.querySelectorAll(
        '.hero__content, .hero__image-wrapper, ' +
        '.about__description, .about__info, ' +
        '.skill-card, .project-card, ' +
        '.contact__info, .contact__actions, ' +
        '.section__header'
    );

    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animateElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

/* ===== SMOOTH STAGGER FOR SKILL & PROJECT CARDS ===== */
function staggerCards() {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });
}

document.addEventListener('DOMContentLoaded', staggerCards);

/* ===== THEME TOGGLE (placeholder) ===== */
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.classList.remove('fa-gear');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-gear');
        }
    });
}
