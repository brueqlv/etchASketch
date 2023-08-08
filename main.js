getGrid(16);

const header = document.querySelector('#header');
const btn = document.createElement('button');
btn.classList.add('button');
btn.textContent = 'Change amount of pixels';
header.appendChild(btn);

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    let amount = prompt("Enter amount of pixels!(From 1 - 100)");
    if(typeof amount !=="number" || amount >100 || amount == "" || amount<1){
        amount = prompt("Enter amount of pixels!(From 1 - 100)");
    } 
    getGrid(amount);
})



function getGrid(input){
    
    const container = document.querySelector('#container');
    container.replaceChildren();

for(let j = 0; j<input;j++){
    
const lineContainer = document.createElement('div');
lineContainer.classList.add('lineDiv');
container.appendChild(lineContainer);

    for(let i = 0; i<input; i++){
        
        const square = document.createElement('div');
        square.classList.add('square');
        lineContainer.appendChild(square);
};
};

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', (e) => {
        square.classList.add('mouseenter');
    });
});

}


