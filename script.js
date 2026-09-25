// Day/Night თემის გადამრთველი
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// შენახული თემის შემოწმება localStorage-იდან
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
}

// ღილაკზე დაჭერისას თემის შეცვლის ლოგიკა
toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    }
});
