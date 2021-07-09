const bgImg = document.querySelector(".background");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgSrc = `img/${chosenImage}`;

bgImg.src = bgSrc;
