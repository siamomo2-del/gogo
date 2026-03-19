
const themeSwitch = document.querySelector('#checkbox');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark-mode') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeSwitch.checked = false;
    }
}

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    applyTheme(currentTheme);
} else {
    // If no saved theme, use system preference
    if (prefersDarkScheme.matches) {
        applyTheme('dark-mode');
    } else {
        applyTheme('light-mode');
    }
}

// Listener for the manual theme switch
themeSwitch.addEventListener('change', function(e) {
    const newTheme = e.target.checked ? 'dark-mode' : 'light-mode';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Optional: Listener for system preference changes
prefersDarkScheme.addEventListener('change', function(e) {
    // Only apply if the user hasn't manually set a theme
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark-mode' : 'light-mode';
        applyTheme(newTheme);
    }
});
