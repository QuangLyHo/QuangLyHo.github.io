const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

document.getElementById('carousel-prev-btn').addEventListener('click', prevSlide)
document.getElementById('carousel-next-btn').addEventListener('click', nextSlide)


function showSlide(n) {
    hideAllSlides()
    slides[n].classList.add('carousel-item-visible')
}

function nextSlide() {
    hideAllSlides()

    // if (slidePosition === totalSlides - 1) {
    //     slidePosition = 0
    // } else slidePosition++

    slidePosition === totalSlides - 1 ?  slidePosition = 0 : slidePosition++

    showSlide(slidePosition)
}

function prevSlide() {
    hideAllSlides()
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else slidePosition--

    showSlide(slidePosition)
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}


let autoIncrSlide = setInterval(nextSlide, 3000)
