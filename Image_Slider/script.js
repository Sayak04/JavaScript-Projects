'use strict'

const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

const imageContainer = document.querySelector('.container');

const images = ["1", "2", "3", "4", "5"];
let img = 0;

leftBtn.addEventListener('click', function () {
    if (img == 0)
        img = 5;
    img--;
    imageContainer.style.background = `url('/Images/${images[img]}.png') center/cover fixed no-repeat`;
});
rightBtn.addEventListener('click', function () {
    if (img == 4)
        img = -1;
    img++;
    imageContainer.style.background = `url('/Images/${images[img]}.png') center/cover fixed no-repeat`;
});