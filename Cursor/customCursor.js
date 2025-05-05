const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (a) => {
    cursor.style.top = a.pageY + 'px'
    cursor.style.left = a.pageX + 'px'
    console.log(a.pageX, a.pageY);
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
})

window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'))
    cursor.style.top = scrollY + fromTop + 'px'
    console.log(scrollY);

})

window.addEventListener('click', () => {

    if (cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');
    }
    else {
        cursor.classList.add('click')
    }
})
