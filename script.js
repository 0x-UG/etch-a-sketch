const container = document.querySelector('#container');

/* const div = document.createElement('div');
div.classList.add ('grid-item');
container.appendChild(div);

const div2 = document.createElement('div');
div2.classList.add('grid-item');
container.appendChild(div2);

*/

for (let i = 1; i <= 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
}