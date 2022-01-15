// alert('Scripted!');
buttons = document.querySelectorAll(".drum");

function make_sound(char) {
    switch (char) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
        default:
            break;
    }
    audio.play();
}

// For Animation
function button_animation(currentKey) {
    var active_button = document.querySelector("." + currentKey);
    active_button.classList.add('pressed');
    setTimeout(() => {
        active_button.classList.remove('pressed');
    }, 100);
}

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        console.log(this.innerHTML);
        make_sound(this.innerHTML);
        button_animation(this.innerHTML);
    });
};

// For Keypress Listener
document.addEventListener("keypress", function (event) {
    make_sound(event.key);
    button_animation(event.key);
});
