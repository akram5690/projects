<<<<<<< HEAD
let index = 0;
const slides = document.querySelectorAll(".slider-container img");
const totalSlides = slides.length;
const slider = document.getElementById("slider");

function moveSlide() {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlide, 5000);



=======
$(document).ready(function () {
    $(".skitter-large").skitter();
});

let inpbtn = document.getElementById("src-btn");

inpbtn.addEventListener("click", () => {
    let src = document.querySelector(".inp-src");
    src.classList.toggle("src1");
});

let hamburgerIcon = document.getElementById('hamburger-icon');
let li = document.querySelector(".nav-links");

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('open');
  li.classList.toggle("list-open");
});
>>>>>>> d5ddd2a (add file)
