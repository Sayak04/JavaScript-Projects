'use strict'

const textHex = document.querySelector('.text');
const buttonMain = document.querySelector('.btn');
const mainContainer = document.getElementById('full-height');

const arrayHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let hexColorString = "#";

buttonMain.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        let generateNum = Math.floor(Math.random() * arrayHex.length);
        hexColorString += arrayHex[generateNum];
    }
    console.log(hexColorString);
    mainContainer.style.background = hexColorString;
    textHex.textContent = `HEX COLOR:- ${hexColorString}`;
    hexColorString = "#";
});

