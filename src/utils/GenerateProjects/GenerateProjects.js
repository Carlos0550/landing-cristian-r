import { cardsArray } from "./cards.js"
let cardsContainer = document.querySelector(".cards__wrapper")

export const insertProjects = () => {
    if (!cardsContainer) {
        console.warn("No se encontró el contenedor para las tarjetas.");
        return;
    }
console.log(cardsContainer)
    const cards = cardsArray.map((card) => {
        const { title, description, image } = card;

        return `
            <picture class="card-image">
                <img src="${image}" alt="${title}">
                <div class="card-texts">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-description">${description}</p>
                </div>
            </picture>
        `;
    });

    cardsContainer.insertAdjacentHTML("beforeend", cards.join(""));
};