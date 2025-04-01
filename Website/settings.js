// Get references to the form elements
const themeForm = document.getElementById('themeForm');
const languageForm = document.getElementById('languageForm');
const notificationForm = document.getElementById('notificationForm');

// Load saved settings from local storage
document.addEventListener('DOMContentLoaded', function() {
    // Set theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.getElementById('theme').value = savedTheme;
    }

    // Set language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        document.getElementById('language').value = savedLanguage;
    }

    // Set notification setting
    const savedNotifications = localStorage.getItem('notifications') === 'true';
    document.getElementById('notifications').checked = savedNotifications;
});

// Save settings to local storage on form submission
themeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const theme = document.getElementById('theme').value;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
});

languageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const language = document.getElementById('language').value;
    localStorage.setItem('language', language);
});

notificationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const notifications = document.getElementById('notifications').checked;
    localStorage.setItem('notifications', notifications);
});
