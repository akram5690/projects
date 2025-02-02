let index = 0;
const slides = document.querySelectorAll(".slider-container img");
const totalSlides = slides.length;
const slider = document.getElementById("slider");

function moveSlide() {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 5000);



