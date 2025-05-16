// Add mobile menu button to the DOM
const nav = document.querySelector('.nav');
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
nav.parentNode.insertBefore(mobileMenuBtn, nav);

// Navigation links hover effect
const navLinks = document.querySelectorAll(".nav li a");
navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add('active');
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove('active');
    });
});

// Mobile menu toggle
const navUl = document.querySelector(".nav ul");
mobileMenuBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
    mobileMenuBtn.innerHTML = navUl.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navUl.classList.remove("active");
        mobileMenuBtn.innerHTML = "☰";
    }
});

// Join us scroll functionality
const content = document.querySelector(".nav .content");
content.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    // Close mobile menu if open
    navUl.classList.remove("active");
    mobileMenuBtn.innerHTML = "☰";
});