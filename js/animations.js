// Initialize Lottie Animations
function initLottieAnimations() {
    // Hero Animation (Crane/Industrial)
    const heroAnimationData = {
        // Same animation data as original
    };

    try {
        lottie.loadAnimation({
            container: document.getElementById('hero-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: heroAnimationData
        });
    } catch (error) {
        // Fallback if Lottie fails
        document.getElementById('hero-animation').innerHTML = '<i class="fas fa-industry" style="font-size: 4rem; color: var(--accent-color);"></i>';
    }
}

// Initialize animations if element exists
if (document.getElementById('hero-animation')) {
    initLottieAnimations();
}