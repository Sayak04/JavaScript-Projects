'use strict'

let counter = 0;
const lower = document.getElementById('lower-btn');
const higher = document.getElementById('add-btn');
const numberSpace = document.querySelector('.number');

function display() {
    if (counter < 0) {
        numberSpace.style.color = "red"
    } else if (counter > 0) {
        numberSpace.style.color = "green";
    } else {
        numberSpace.style.color = '#333';
    }
    numberSpace.textContent = counter;
}

lower.addEventListener("click", function() {
    counter -= 1;
    display();
});

higher.addEventListener("click", function() {
    counter += 1;
    display();
});
