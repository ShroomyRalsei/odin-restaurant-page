import {createHomePage} from './homepage.js';

import {createMenuPage} from './menupage.js';

import {createContactPage} from './contactpage.js';

function createHeaderAndFooter() {
    const headerContainer = document.querySelector(".header");

    const footerContainer = document.querySelector(".footer");

    footerContainer.innerHTML = `<div class="footer container">
    <p><a href="https://www.freepik.es/foto-gratis/restaurante-paredes-ladrillo-rojo-mesas-madera-tuberias-techo_7734844.htm#query=restaurante&position=0&from_view=search&track=sph&uuid=9477b964-aad3-466c-b8f7-547e7428417a">Restaurant image by KamranAydinov</a> on Freepik</p>
    <h4>Menu item images from Wikipedia</h4>
    <h4>Characters are from CoC and belong to Supercell</h4>
    </div>`;

    const tabChanger1 = document.createElement("button");

    tabChanger1.setAttribute("type", "button");

    tabChanger1.classList.add("tab-changer");

    tabChanger1.textContent = "About Us";

    tabChanger1.addEventListener("click", () => {
        createHomePage();
    })

    headerContainer.appendChild(tabChanger1);

    const tabChanger2 = document.createElement("button");

    tabChanger2.setAttribute("type", "button");

    tabChanger2.classList.add("tab-changer");

    tabChanger2.textContent = "Menu";

    tabChanger2.addEventListener("click", () => {
        createMenuPage();
    })

    headerContainer.appendChild(tabChanger2);

    const tabChanger3 = document.createElement("button");

    tabChanger3.setAttribute("type", "button");

    tabChanger3.classList.add("tab-changer");

    tabChanger3.textContent = "Contact Us";

    tabChanger3.addEventListener("click", () => {
        createContactPage();
    })

    headerContainer.appendChild(tabChanger3);
};

export {createHeaderAndFooter}