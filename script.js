var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

var swiper = new Swiper(".facultySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
const list = document.querySelectorAll(".nav-list");

hamburger.addEventListener('click', () => {
    //Animate Links
    navUl.classList.toggle("open");
    list.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
});