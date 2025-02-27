let buttonToggleTheme = document.querySelector('#toggleTheme');

let theme = localStorage.getItem('theme');

if(theme === 'dark') {
    document.documentElement.classList.add('dark');
    buttonToggleTheme.checked = true;
}

buttonToggleTheme.addEventListener('change', () => {
    
    if(theme === 'light') {
        theme = 'dark';
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', theme);
    } else {
        theme = 'light';
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', theme);
    }
});