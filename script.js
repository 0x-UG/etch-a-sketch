document.addEventListener('DOMContentLoaded', function() {
       createBoard(16); 
       let popup = document.querySelector('#popup');
       popup.addEventListener('click', function() {
        let size = getUserInput();
        createBoard(size);
       });
})


function createBoard (size) {
        let container = document.querySelector('#container');

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let dimension = size * size;

        for (let i = 0; i < dimension; i++) {
                let div = document.createElement('div');
                container.insertAdjacentElement('beforeend', div);
        }
}

function getUserInput () {
        let input = prompt("Input a size");
        let message = document.querySelector('#message');
        if (input == '') {
            message.innerHTML = 'Please provide a number';    
        } else if (input < 0 || input > 100) {
                message.innerHTML = 'Invalid dimension! Input a number between 2 and 100';
        } else {
                message.innerHTML = 'Have fun!!';
                return input;
        }
}