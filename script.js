let color = 'black';

let click = false;


document.addEventListener('DOMContentLoaded', function() {
       document.querySelector('body').addEventListener('click', function(e) {
        if(e.target.tagName != "BUTTON") {
                click = !click;
                let draw = document.querySelector('#draw');
                if (click) {
                        draw.innerHTML = 'Now you can draw. Have fun!!';
                } else {
                        draw.innerHTML = 'You can\'t draw :(';
                }
        }
       })

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
                div.addEventListener('mouseover', colorDiv);
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


function colorDiv () {
      if (click) {
        if(color == "random") {
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
         } else {
                 this.style.backgroundColor = 'black';
         }
      }  
}

function setColor (colorChoice) {
        color = colorChoice;
}

function resetBoard () {
        let divs = document.querySelectorAll('div');
        divs.forEach((div) => div.style.backgroundColor = 'white');
}


