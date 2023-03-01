const navBtn = document.querySelector('.nav__btn')
const menu = document.querySelector('.menu')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--active')
    menu.classList.toggle('menu--active')
})