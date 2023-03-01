const navBtn = document.querySelector('.nav__btn')
const menu = document.querySelector('.menu')
const coverbg = document.querySelector('.cover')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--active')
    menu.classList.toggle('menu--active')
    coverbg.classList.toggle('cover--active')
})