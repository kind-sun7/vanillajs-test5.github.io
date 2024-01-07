const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const body = document.body;

bgImage.src = `img/${chosenImage}`;
body.style.backgroundImage = `url(img/${chosenImage})`;

//body.style.backgroundImage = `img/${chosenImage}`;
//document.body.appendChild(bgImage);