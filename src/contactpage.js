import Barbarian from './barbarian.jpg';

import BarbarianKing from './barbarian-king.png';

import ArcherQueen from './archer-queen.jpg';

function createContactPage () {
        const contentContainer = document.querySelector(".content");

        contentContainer.textContent = "";

        const contactHeader = document.createElement("h1");

        contactHeader.textContent = "Contact Us";

        const barbarianBox = document.createElement("div");

        barbarianBox.setAttribute("class", "contact box");

        barbarianBox.innerHTML = `<div class="contact-text">
        <h3>Barbarian</h3>
        discbarb#0 on discord
        </div>`;

        const barbarianImg = new Image();

        barbarianImg.src = Barbarian;

        barbarianBox.appendChild(barbarianImg);

        contentContainer.appendChild(barbarianBox);

        const barbarianKingBox = document.createElement("div");

        barbarianKingBox.setAttribute("class", "contact box");

        barbarianKingBox.innerHTML = `<div class="contact-text">
        <h3>Barbarian King</h3>
        barbking#0 on discord
        </div>`;

        const barbarianKingImg = new Image();

        barbarianKingImg.src = BarbarianKing;

        barbarianKingBox.appendChild(barbarianKingImg);

        contentContainer.appendChild(barbarianKingBox);

        const archerQueenBox = document.createElement("div");

        archerQueenBox.setAttribute("class", "contact box");

        archerQueenBox.innerHTML = `<div class="contact-text">
        <h3>Archer Queen</h3>
        archqueen#0 on discord
        </div>`;

        const archerQueenImg = new Image();

        archerQueenImg.src = ArcherQueen;

        archerQueenBox.appendChild(archerQueenImg);

        contentContainer.appendChild(archerQueenBox);
};

export {createContactPage};