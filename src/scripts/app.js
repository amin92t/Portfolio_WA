const navBtn = document.querySelector('.nav__btn')
const menu = document.querySelector('.menu')
const coverbg = document.querySelector('.cover')

const resumeListItems = document.querySelectorAll('.resume__list-item')
const portfolioListItems = document.querySelectorAll('.portfolio__list-item')


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


portfolioListItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.portfolio__slider--show').classList.remove('portfolio__slider--show')
        document.querySelector('.portfolio__list-item--active').classList.remove('portfolio__list-item--active')
        item.classList.add('portfolio__list-item--active')
        let sliderId = item.getAttribute('data-content-id')
        document.querySelector(sliderId).classList.add('portfolio__slider--show')
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        DynamicBullets: true,

    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3
        }
    }
});
