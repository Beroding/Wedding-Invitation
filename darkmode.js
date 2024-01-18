document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('darkModeButton');
    const html = document.documentElement;

    button.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        button.classList.toggle('moon', html.classList.contains('dark-mode'));
    });
});