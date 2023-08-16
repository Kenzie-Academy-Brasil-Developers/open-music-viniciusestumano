import { products, categories } from "./productsData.js";
/* Desenvolva sua lógica aqui ... */

// function createCard(product){
//     const card = document.createElement("li")
//     /* Trabalhe sua lógica aqui */

//     return card
// }

function render(albums) {
    const albumsList = document.querySelector(".albums__list");

    products.forEach((products) => {
        const cardCreate = createCard(products);
        albumsList.appendChild(cardCreate);
    });
}

const createCard = ({id, title, category, price, img, band, year}) => {
    const card = document.createElement("li");
    const cardImg = document.createElement("img");
    const cardParag = document.createElement("p");
    const cardTitle = document.createElement("h2");
    const cardSpan = document.createElement("span");
    const cardButton = document.createElement("Button")

    card.classList.add("album__container");

    cardImg.src = img;
    cardImg.alt = band;

    cardParag.classList.add("album__name-year");
    cardParag.innerText = band + year;

    cardTitle.classList.add("album__title");
    cardTitle.innerText = title;
    
    cardSpan.classList.add("album__price");
    cardSpan.innerText = `R$ ${price}.00`;
    
    cardButton.classList.add("album__button")
    cardButton.innerText = "Comprar";

    card.append(cardImg, cardParag, cardTitle, cardSpan, cardButton);

    return card
}

function renderButtons (buttons) {
    const genderButtons = document.querySelector("gender__buttons-list");

    categories.forEach(()=>{
        const butonsCreate = createButtons(categories);
        genderButtons.appendChild(butonsCreate);
    });
}

const createButtons = (categories) => {
    const genderListButtons = document.querySelector(".gender__buttons-list");

    const listButtons = document.createElement("li");
    const genderButtons = document.createElement("button");
    
    genderButtons.innerText = categories;
    listButtons.append(genderButtons);

    genderListButtons.append(listButtons);

    return genderButtons
}

render();
renderButtons();
createCard();
createButtons();
