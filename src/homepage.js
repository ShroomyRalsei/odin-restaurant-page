import RestaurantImg from './restaurant-img.jpg';

import {createMenuPage} from './menupage.js';

function createHomePage() {
    const contentContainer = document.querySelector(".content");

    contentContainer.textContent = "";

    const aboutUsHeader = document.createElement("h1");

    aboutUsHeader.textContent = "About Us";

    contentContainer.appendChild(aboutUsHeader);

    const restaurantImg = new Image();

    restaurantImg.src = RestaurantImg;

        restaurantImg.classList.add("restaurant-img");

        contentContainer.appendChild(restaurantImg);

        const welcomeBox = document.createElement("div");

        welcomeBox.setAttribute("class", "text box");

        welcomeBox.innerHTML = `Welcome to the Barbaric Bakery! Our sweets are handmade by barbarians (yes, barbarians like the ones from Clash of Clans!)
        <br>
        <br>
        We're well known around the world for making the sweetest cakes!`;

        contentContainer.appendChild(welcomeBox);

        const addressBox = document.createElement("div");

        addressBox.setAttribute("class", "text box");

        const addressTxt = document.createElement("p");

        addressTxt.textContent = `You can visit us at (totally real address), or alternatively you can order our products online! Please check out `;

        const addressBtn = document.createElement("button");

        addressBtn.textContent = "our menu";

        addressBtn.addEventListener("click", () => {
            createMenuPage();
        })

        addressTxt.appendChild(addressBtn);

        addressBox.appendChild(addressTxt);

        contentContainer.appendChild(addressBox);
};
export {createHomePage};