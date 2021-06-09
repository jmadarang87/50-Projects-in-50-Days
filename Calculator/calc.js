console.log('calculator');
const output = document.getElementById('output');
const one = document.getElementById('1');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener( 'click', (event) => {
        let value = event.target.id;
        output.innerHTML = value;
    })
});