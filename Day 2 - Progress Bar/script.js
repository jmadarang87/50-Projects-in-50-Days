const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive);
    updateProgress();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1 ) {
        currentActive = 1;
    }
    console.log(currentActive);
    updateProgress();
});

function updateProgress() {
    circles.forEach((circle, indx) => {
        if (indx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';
    })

    if (currentActive === circles.length) {
        next.disabled = true;
    } else if (currentActive === 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

};


// next.addEventListener('click', () => {
//     currentActive++;
//     updateStatusBar();
//     if (currentActive > (circles.length -1)) {
//         next.disabled = true;
//     }
//     if (currentActive > 1) {
//         prev.disabled = false;
//     }
//     console.log(currentActive);
// });

// prev.addEventListener('click', () => {
//     currentActive--;
//     reduceStatusBar();
//     console.log(currentActive);
//     if (currentActive < circles.length) {
//         next.disabled = false;
//     }
//     if (currentActive === 1) {
//         prev.disabled = true;
//     }
// });

// function updateStatusBar() {
//     if (currentActive === 1) {
//         progress.style.width = '0%';
//         circles.classList = "active";
//     } else if (currentActive === 2) {
//         progress.style.width = '33%';
//         circles[1].classList.add('active');
//     } else if (currentActive === 3) {
//         progress.style.width = '66%';
//         circles[2].classList.add('active');
//     } else if (currentActive === 4) {
//         progress.style.width = '100%';
//         circles[3].classList.add('active');
//     }
// }

// function reduceStatusBar() {
//     if (currentActive === 1) {
//         progress.style.width = '0%';
//         circles[`${currentActive}`].classList.remove('active');
//     } else if (currentActive === 2) {
//         progress.style.width = '33%';
//         circles[`${currentActive}`].classList.remove('active');
//     } else if (currentActive === 3) {
//         progress.style.width = '66%';
//         circles[`${currentActive}`].classList.remove('active');
//     } else if (currentActive === 4) {
//         progress.style.width = '100%';
//         circles[`${currentActive}`].classList.remove('active');
//     }
// }