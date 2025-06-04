// Theme Management
const themeManager = {
    init() {
        this.buttons = document.querySelectorAll('.theme-button');
        this.body = document.body;
        this.loadTheme();
        this.bindEvents();
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'auto';
        this.setTheme(savedTheme);
    },

    setTheme(theme) {
        // Update active button
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });

        // Apply theme
        if (theme === 'auto') {
            this.body.removeAttribute('data-theme');
        } else {
            this.body.setAttribute('data-theme', theme);
        }

        // Save preference
        localStorage.setItem('theme', theme);
    },

    bindEvents() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.setTheme(button.dataset.theme);
            });
        });
    }
};

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    themeManager.init();

    // Add subtle fade-in animation for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
