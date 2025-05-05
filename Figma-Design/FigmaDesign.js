
const switcher = document.querySelector('.switcher');
switcher.addEventListener('click', () => {
    if (document.body.getAttribute('theme') === 'light') {
        document.body.setAttribute('theme', 'dark');
        switcher.innerHTML= "Light"
    } else {
        document.body.setAttribute('theme', 'light');
        switcher.innerHTML= "Dark"

    }
});
