const toggleButton = document.getElementsByClassName('toggle-button')[0]
const nav__links = document.getElementsByClassName('nav__links')[0]


toggleButton.addEventListener('click', () => {
    nav__links.classList.toggle('active')
})