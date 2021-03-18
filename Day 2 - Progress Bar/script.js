const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    updateStatusBar();
    if (currentActive > (circles.length -1)) {
        next.disabled = true;
    }
    if (currentActive > 1) {
        prev.disabled = false;
    }
    console.log(currentActive);
});

prev.addEventListener('click', () => {
    currentActive--;
    reduceStatusBar();
    console.log(currentActive);
    if (currentActive < circles.length) {
        next.disabled = false;
    }
    if (currentActive === 1) {
        prev.disabled = true;
    }
});

function updateStatusBar() {
    if (currentActive === 1) {
        progress.style.width = '0%';
        circles.classList = "active";
    } else if (currentActive === 2) {
        progress.style.width = '33%';
        circles[1].classList.add('active');
    } else if (currentActive === 3) {
        progress.style.width = '66%';
        circles[2].classList.add('active');
    } else if (currentActive === 4) {
        progress.style.width = '100%';
        circles[3].classList.add('active');
    }
}

function reduceStatusBar() {
    if (currentActive === 1) {
        progress.style.width = '0%';
        circles[`${currentActive}`].classList.remove('active');
    } else if (currentActive === 2) {
        progress.style.width = '33%';
        circles[`${currentActive}`].classList.remove('active');
    } else if (currentActive === 3) {
        progress.style.width = '66%';
        circles[`${currentActive}`].classList.remove('active');
    } else if (currentActive === 4) {
        progress.style.width = '100%';
        circles[`${currentActive}`].classList.remove('active');
    }
}