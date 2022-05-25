"use strict";
let counter = 0;
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const slider = document.querySelector("#slider");
const sliderContainer = document.querySelector("#silder-container");
const max = document.querySelectorAll(".slide").length - 1;

function sliderfunc() {
    if (counter < max) {
        counter++;
        slider.style.left = "-" + 250 * counter + "px";
    } else {
        counter = 0;
        slider.style.left = "-" + 250 * counter + "px";
    }
};
next.addEventListener("click", sliderfunc);

let timer = setInterval(sliderfunc, 3000);

sliderContainer.addEventListener("mouseover", () => {
    clearInterval(timer)
});

sliderContainer.addEventListener("mouseout", () => {
    timer = setInterval(sliderfunc, 3000);
});

back.addEventListener("click", () => {
    if (counter >= 0) {
        counter--;
        slider.style.left = "-" + 250 * counter + "px";
    } else {
        counter = 0;
        slider.style.left = "-" + 250 * counter + "px";
    }
});