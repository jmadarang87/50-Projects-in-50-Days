const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const circle = document.querySelector('.circle-container');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    circle.classList.add('show-nav');
})

close.addEventListener('click', () => {
    circle.classList.remove('show-nav');
    container.classList.remove('show-nav');

})

