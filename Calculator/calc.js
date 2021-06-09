const output = document.getElementById('section-output');
const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const zeroBtn = document.getElementById('0');
const decimalBtn = document.getElementById('.');
const clearBtn = document.getElementById('clear');
const numBtns = document.getElementsByClassName('number');
const operationBtns = document.querySelectorAll('operation');
const display = document.getElementById('display');
let preDisplay = "";
let currentDisplay = "";

const updateDisplay = (event) => {
    if ( display.innerText === "0" ) {
        let currentDisplay = "";
        currentDisplay = event.target.id;
        display.innerText = currentDisplay;
    } else {
        display.innerText += event.target.id;
    }
}

for (i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateDisplay, false);
};

clearBtn.addEventListener( 'click', () => {
    display.innerText = '';
})

