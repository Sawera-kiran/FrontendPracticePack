const button = document.querySelector('.readMore-btn')
const mainText = document.querySelector('.main-text')

button.addEventListener('click', (e) => {

    mainText.classList.toggle('show-more')

    if (button.innerText === 'Read More') {
        button.innerText = 'Read Less'
    } else {
        button.innerText = 'Read More'

    }
})

