const thumbnails = document.querySelectorAll(".hero-banner__thumbnails .hero-banner__thumbnail")
const boxes = document.querySelectorAll(".hero-banner__boxes .hero-banner__box")
const backgrounds = document.querySelectorAll(".hero-banner__backgrounds .hero-banner__background")

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function(e) {
        handleClickThumbnail(this, index);
    })
})

function handleClickThumbnail(thumbnail, index) {
    thumbnails.forEach(thumb => {
        thumb.classList.remove("hero-banner__thumbnail--active")
    })
    boxes.forEach(box => {
        box.classList.remove("hero-banner__box--active")
        if(box.dataset.index == index) {
            box.classList.add("hero-banner__box--active")
        }
    })
    backgrounds.forEach(background => {
        background.classList.remove("hero-banner__background--active")
        if(background.dataset.index == index) {
            background.classList.add("hero-banner__background--active")
        }
    })
    thumbnail.classList.add("hero-banner__thumbnail--active")
}

handleClickThumbnail(thumbnails[0], 0);



// genre slide

let genreIndex = 1
const genreSlides = document.querySelectorAll(".genre__slides .genre__slide")
const genreSlidesWrapper = document.querySelector(".genre__slides")
const genreControl = document.querySelectorAll(".genre__control .btn__control")



let indexGenreSlide = 2;
genreSlides.forEach((slide, index) => {
    console.log(slide.offsetLeft + ": " + slide.offsetWidth + "=> " + (Math.floor(slide.offsetLeft + slide.offsetWidth/2)))
    if(Math.floor(slide.offsetLeft + slide.offsetWidth/2) == (genreSlidesWrapper.offsetWidth / 2)) {
        indexGenreSlide = index;
    }
})

console.log(genreSlidesWrapper.offsetWidth / 2)



genreControl.forEach(control => {
    control.addEventListener("click", function() {
        if(this.dataset.action == 1) {
            genreSlides[indexGenreSlide].classList.remove("genre__slide--active")
            indexGenreSlide++
            // genreSlides[indexGenreSlide].classList.add("genre__slide--active")
            console.log(genreSlidesWrapper.offsetLeft)

            genreSlidesWrapper.scrollTo({
                left: genreSlidesWrapper.scrollLeft + genreSlides[0].offsetWidth,
                behavior: 'smooth'
            })
        } else {
            genreSlidesWrapper.scrollTo({
                left: genreSlidesWrapper.scrollLeft - genreSlides[0].offsetWidth,
                behavior: 'smooth'
            })
        }
    })
})

console.log(genreSlidesWrapper.offsetLeft)