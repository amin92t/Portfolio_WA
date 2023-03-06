const navBtn = document.querySelector('.nav__btn')
const menu = document.querySelector('.menu')
const coverbg = document.querySelector('.cover')

const resumeListItems = document.querySelectorAll('.resume__list-item')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--active')
    menu.classList.toggle('menu--active')
    coverbg.classList.toggle('cover--active')
})

resumeListItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.resume__content--show').classList.remove('resume__content--show')
        document.querySelector('.resume__list-item--active').classList.remove('resume__list-item--active')
        item.classList.add('resume__list-item--active')
        let resumeContentId = item.getAttribute("data-content-id")
        document.querySelector(resumeContentId).classList.add('resume__content--show')
    })
})

