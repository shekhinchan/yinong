// Footer link hover effects
const lastlink = document.querySelectorAll(".last h1 a");
lastlink.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.classList.add('changecolor');
    });
    link.addEventListener("mouseleave", () => {
        link.classList.remove('changecolor');
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all content sections
document.querySelectorAll('.show, .show2, .show3').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Handle image loading
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    // Add loading placeholder
    if (!img.complete) {
        img.classList.add('loading');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .loading {
        opacity: 0;
        transition: opacity 0.3s ease-in;
    }
    
    .loaded {
        opacity: 1;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .fade-out, .fade-in, .loading, .loaded {
            transition: none;
        }
    }
`;
document.head.appendChild(style);