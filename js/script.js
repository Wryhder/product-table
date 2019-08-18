document.addEventListener("DOMContentLoaded", function() {
    
    const table = document.querySelector('table');

    let priceTableCells;
    // Variable contains a nodeList;
    // it needs to be converted to an array before it can be looped over
    priceTableCells = [...document.querySelectorAll('.price')];

    const chores = {
        createNode(element) {
            return document.createElement(element);
        },
        append(parent, el) {
            return parent.appendChild(el);
        },
    }

    priceTableCells.forEach((cell) => {
        const buttonPlus = chores.createNode('button');
        const buttonMinus = chores.createNode('button');

        buttonPlus.classList.add('plus');
        buttonPlus.textContent = '+';


        buttonMinus.classList.add('minus');
        buttonMinus.textContent = '-';

        chores.append(cell, buttonPlus);
        chores.append(cell, buttonMinus);
    });

    table.addEventListener('click', function(event) {
        const clickTarget = event.target;
        const parent = clickTarget.parentNode;

        if (clickTarget.tagName === 'BUTTON' &&
         parent.classList.contains('price')) {
            const priceTextNode = [...parent.childNodes][0];
            
            if (clickTarget.classList.contains('plus')) {
                priceTextNode.data = Number.parseInt(priceTextNode.data) + 1;
            } else {
                priceTextNode.data = Number.parseInt(priceTextNode.data) - 1;}
         }
    })
});