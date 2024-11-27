const images = ["./img/test1.webp", "./img/test2.webp", "./img/test3.webp","./img/waterblur.webp"];
let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
    carouselImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();
