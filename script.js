const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// დარწმუნება, რომ საიტი მუდამ ნათელ რეჟიმშია
document.documentElement.removeAttribute('data-theme');
localStorage.removeItem('theme');

// თუ ღილაკი ან იკონკა ჯერ კიდევ არსებობს DOM-ში, შეგვიძლია დავმალოთ ან გავასუფთაოთ
if (themeIcon) themeIcon.textContent = '';
if (toggleBtn) toggleBtn.style.display = 'none';
