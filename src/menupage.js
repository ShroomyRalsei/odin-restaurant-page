import IceCream from './ice-cream.jpg';

import Cake from './cake.jpg';

import Cupcake from './cupcake.jpg';

import OrangeJuice from './orange-juice.jpg';

function createMenuPage() {
        const contentContainer = document.querySelector(".content");

        contentContainer.textContent = "";

        const menuHeader = document.createElement("h1");

        menuHeader.textContent = "Our Menu";

        const dessertHeader = document.createElement("h2");

        dessertHeader.textContent = "Dessert";

        contentContainer.appendChild(dessertHeader);

        const cakeBox = document.createElement("div");

        cakeBox.setAttribute("class", "text box");

        cakeBox.innerHTML = `<h3>Cake</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit, corrupti iure amet distinctio facere animi consectetur nobis id aperiam quaerat et. Placeat temporibus ex, reprehenderit iure quo beatae! Excepturi.</p>
        <h3>Price: 10 dollars</h3>`;
        

        const cakeImg = new Image();

        cakeImg.src = Cake;

        cakeBox.appendChild(cakeImg);

        contentContainer.appendChild(cakeBox);

        const cupcakeBox = document.createElement("div");

        cupcakeBox.setAttribute("class", "text box");

        cupcakeBox.innerHTML = `<h3>Cupcake</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit, corrupti iure amet distinctio facere animi consectetur nobis id aperiam quaerat et. Placeat temporibus ex, reprehenderit iure quo beatae! Excepturi.</p>
        <h3>Price: 4 dollars</h3>`;

        const cupcakeImg = new Image();

        cupcakeImg.src = Cupcake;

        cupcakeBox.appendChild(cupcakeImg);

        contentContainer.appendChild(cupcakeBox);

        const iceCreamBox = document.createElement("div");

        iceCreamBox.setAttribute("class", "text box");

        iceCreamBox.innerHTML = `<h3>Ice Cream</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit, corrupti iure amet distinctio facere animi consectetur nobis id aperiam quaerat et. Placeat temporibus ex, reprehenderit iure quo beatae! Excepturi.</p>
        <h3>Price: 5 dollars</h3>`;

        const iceCreamImg = new Image();

        iceCreamImg.src = IceCream;

        iceCreamBox.appendChild(iceCreamImg);

        contentContainer.appendChild(iceCreamBox);

        const drinksHeader = document.createElement("h2");

        drinksHeader.textContent = "Drinks";

        contentContainer.appendChild(drinksHeader);

        const juiceBox = document.createElement("div");

        juiceBox.setAttribute("class", "text box");

        juiceBox.innerHTML = `<h3>Orange Juice</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit, corrupti iure amet distinctio facere animi consectetur nobis id aperiam quaerat et. Placeat temporibus ex, reprehenderit iure quo beatae! Excepturi.</p>
        <h3>Price: 1 dollar</h3>`;

        const orangeJuiceImg = new Image();

        orangeJuiceImg.src = OrangeJuice;

        juiceBox.appendChild(orangeJuiceImg);

        contentContainer.appendChild(juiceBox);
    };

export {createMenuPage}