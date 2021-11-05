'use strict';

const colorContainer = document.getElementById('color_container');
const heading = document.getElementById('heading');
const button = document.getElementById('btn');

console.log(btn);

const colors = [
    "red",
    "yellow",
    "blue",
    "black",
    "green",
    "orange",
    "#B284BE",
    "#E52B50",
    "#FBCEB1",
    "#FE6F5E",
    "#E3DAC9	",
    "#5DADEC",
    "#CC5500",
    "#E4717A	",
    "#EFBBCC",
    "#F7E7CE",
    "#DE6FA1",
    "#6F4E37",
    "#893F45",
    "#FFD300",
];
console.log(colors[3]);

button.addEventListener("click", function () {
    let index = Math.floor((Math.random() * colors.length));
    console.log(index);
    colorContainer.style.backgroundColor = `${colors[index]}`;
    heading.style.color = `${colors[index]}`;
});
