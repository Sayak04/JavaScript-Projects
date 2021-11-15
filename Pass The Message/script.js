'use strict'

const textByUser = document.querySelector('#message');
console.log(textByUser);
const button = document.getElementById('submit_button');
const wrongMessage = document.querySelector('.wrong_message');
const userMessage = document.querySelector('.user_text');
wrongMessage.classList.add('hidden');
console.log(userMessage.textContent);


button.addEventListener('click', function (e) {
    console.log(textByUser.value);
    let msg = textByUser.value;
    if (msg.length > 0) {
        wrongMessage.classList.add('hidden');
        userMessage.textContent = textByUser.value;
        textByUser.value = '';
    } else {
        wrongMessage.classList.remove('hidden');
        setTimeout(function () {
            wrongMessage.classList.add('hidden');
        }, 1500)
    }
});