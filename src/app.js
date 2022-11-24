import "./style.scss";
import confetti from "canvas-confetti";
import colorthief from "colorthief";

const colorThief = new colorthief();
console.log("Welcome to NPM!");
const confettiButton = document.querySelector(".confettiFire");
const dogImage = document.querySelector("#dog-image");
const imgAdd = document.querySelector("#imgAdd");

console.log(dogImage);

const confettiFire = () => {
  confetti();
};

const onImageLoad = () => {
  const color = colorThief.getColor(dogImage);

  const body = document.querySelector("body");

  body.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
};

confettiButton.addEventListener("click", confettiFire);
if (dogImage.complete) {
  onImageLoad();
} else {
  dogImage.addEventListener("load", onImageLoad);
}

const newImg = () => {};
imgAdd.addEventListener("click", newImg);

console.log("hello");
