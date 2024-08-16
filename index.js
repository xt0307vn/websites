const carouselList = document.querySelector(".carousel__list");

const controlsButton = document.querySelectorAll(".carousel__controls button");

function runCarousel(type) {
    const carouselItems = document.querySelectorAll(".carousel__list .carousel__item");
    if (type == "next") {
        carouselList.appendChild(carouselItems[0]);
    } else {
        carouselList.prepend(carouselItems[carouselItems.length - 1]);
    }
}

// runCarousel("prev");

controlsButton.forEach((button) => {
    button.addEventListener("click", function () {
        runCarousel(button.dataset.name);
    });
});

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            // alert('left');
            runCarousel("prev");
            break;
        case 38:
            // alert('up');
            runCarousel("prev");
            break;
        case 39:
            // alert('right');
            runCarousel("next");
            break;
        case 40:
            // alert('down');
            runCarousel("next");
            break;
    }
};
