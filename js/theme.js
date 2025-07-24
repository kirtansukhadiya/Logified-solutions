// Theme management functionality
const themeConfig = {
    light: {
        icon: 'fas fa-moon',
        next: 'dark'
    },
    dark: {
        icon: 'fas fa-sun',
        next: 'light'
    }
};

function initializeTheme() {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    // Set theme attribute on root element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle button icon
    const themeToggleBtn = document.querySelector('.theme-toggle i');
    if (themeToggleBtn) {
        themeToggleBtn.className = themeConfig[theme].icon;
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = themeConfig[currentTheme].next;
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Apply the new theme
    applyTheme(newTheme);
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);
