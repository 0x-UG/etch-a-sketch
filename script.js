document.addEventListener('DOMContentLoaded', function() {
       createBoard(16); 
})


function createBoard (size) {
        let container = document.querySelector('#container');

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        let dimension = size * size;

        for (let i = 0; i < dimension; i++) {
                let div = document.createElement('div');
                div.style.backgroundColor = 'blue';
                container.insertAdjacentElement('beforeend', div);
        }
}