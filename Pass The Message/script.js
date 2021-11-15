'use strict'

const textByUser = document.querySelector('#message');
console.log(textByUser);
const button = document.getElementById('submit_button');
const wrongMessage = document.querySelector('.wrong_message');
const userMessage = document.querySelector('.user_text');
wrongMessage.classList.add('hidden');
console.log(userMessage.textContent);

function update_text() {
    console.log(textByUser.value);
    let msg = textByUser.value;
    if (msg.length > 0) {
        userMessage.textContent = textByUser.value;
    } else {
        wrongMessage.classList.remove('hidden');
    }
}

button.addEventListener('click', update_text);