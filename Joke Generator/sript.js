'use strict'

const text = document.querySelector('.textArea');
const button = document.querySelector('.btn');

button.addEventListener('click', getJokes);


async function getJokes() {
    const apiUrl = 'https://icanhazdadjoke.com/';
    const response = await fetch(apiUrl, {
        headers: {
            Accept: 'application/json'
        }
    });
    const apiJokes = await response.json();
    text.textContent = apiJokes.joke;
    console.log(apiJokes);
}