const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image');
let slideNumber = 1;

right.addEventListener('click', () => {
    if (slideNumber < images.length) {
        slider.style.transform = `translateX(-${slideNumber * 300}px)`;
        slideNumber++
    } else {
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }

})
left.addEventListener('click', () => {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2)*300}px)`;
        slideNumber--;
    } else {
        slider.style.transform = `translateX(-${(images.length - 1)*300}px)`;
        slideNumber = images.length;
    }

})
