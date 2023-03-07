const navBtn = document.querySelector('.nav__btn')
const menu = document.querySelector('.menu')
const coverbg = document.querySelector('.cover')

const resumeListItems = document.querySelectorAll('.resume__list-item')
const portfolioListItems = document.querySelectorAll('.portfolio__list-item')

const menuItems = document.querySelectorAll(".menu__item")
const sections = document.querySelectorAll("main > section")

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav__btn--active')
    menu.classList.toggle('menu--active')
    coverbg.classList.toggle('cover--active')
})


// =========================================  listItem Function

function tabChanges(listItems, showClass, activeClass) {
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            removeClass(showClass)
            removeClass(activeClass)
            item.classList.add(activeClass)
            let ContentId = item.getAttribute("data-content-id")
            document.querySelector(ContentId).classList.add(showClass)
        })
    })
}

function removeClass(className) {
    document.querySelector(`.${className}`).classList.remove(className)
}

tabChanges(resumeListItems, "resume__content--show", "resume__list-item--active")
tabChanges(portfolioListItems, "portfolio__slider--show", "portfolio__list-item--active")


menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        removeClass("menu__item--active")
        item.classList.add("menu__item--active")
        let sectionClass = item.getAttribute("data-section")
        let offsetTopY = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: offsetTopY,
            behavior: "smooth"
        })
    })
})


const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5
})

function observerHandler(allsection) {
    // console.log(section);
    // console.log(allsection);
    allsection.map(section => {
        let sectionClassName = section.target.className
        if (section.isIntersecting) {
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.add("menu__item--active")
        } else {
            document.querySelector(`.menu__item[data-section=${sectionClassName}]`).classList.remove("menu__item--active")
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})




// resumeListItems.forEach(item => {
//     item.addEventListener('click', () => {
//         document.querySelector('.resume__content--show').classList.remove('resume__content--show')
//         document.querySelector('.resume__list-item--active').classList.remove('resume__list-item--active')
//         item.classList.add('resume__list-item--active')
//         let resumeContentId = item.getAttribute("data-content-id")
//         document.querySelector(resumeContentId).classList.add('resume__content--show')
//     })
// })


// portfolioListItems.forEach(item => {
//     item.addEventListener('click', () => {
//         document.querySelector('.portfolio__slider--show').classList.remove('portfolio__slider--show')
//         document.querySelector('.portfolio__list-item--active').classList.remove('portfolio__list-item--active')
//         item.classList.add('portfolio__list-item--active')
//         let sliderId = item.getAttribute('data-content-id')
//         document.querySelector(sliderId).classList.add('portfolio__slider--show')
//     })
// })






// =========================================  Swiper Js

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
