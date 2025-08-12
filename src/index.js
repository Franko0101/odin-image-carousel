import "./styles.css";
import { greeting } from "./template.js";
//import image from "./image.png";

console.log(greeting);

let imageTimer = window.setInterval(nextImage, 5000);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carouselSlide = document.querySelector(".carousel-slide");
let left = 0;

prevBtn.addEventListener("click", () => {
    left = left != 0 ? left+1536 : -6144;
    carouselSlide.style.left = `${left}px`;
    window.clearInterval(imageTimer);
    imageTimer = window.setInterval(nextImage, 5000);
});

function nextImage() {
    left = left != -6144 ? left-1536 : 0;
    carouselSlide.style.left = `${left}px`;
    window.clearInterval(imageTimer);
    imageTimer = window.setInterval(nextImage, 5000);
}

nextBtn.addEventListener("click", nextImage);