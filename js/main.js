// Toggle mobile nav menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Scroll fade-in animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-card, .product-card').forEach(card => {
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
});
