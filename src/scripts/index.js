import{ darkModeAdd } from "./darkMode.js";
import { products, categories } from "./productsData.js";
/* Desenvolva sua lógica aqui ... */

// function createCard(product){
//     const card = document.createElement("li")
//     /* Trabalhe sua lógica aqui */

//     return card
// }

function render() {
    const albumsList = document.querySelector(".albums__list");
    albumsList.innerHTML = "";
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
    cardParag.innerText = `${band} ${year}`;

    cardTitle.classList.add("album__title");
    cardTitle.innerText = title;
    
    cardSpan.classList.add("album__price");
    cardSpan.innerText = `R$ ${price}.00`;
    
    cardButton.classList.add("album__button")
    cardButton.innerText = "Comprar";

    card.append(cardImg, cardParag, cardTitle, cardSpan, cardButton);

    return card
}

function renderButtons () {
    const genderButtons = document.querySelector(".gender__buttons-list");

    categories.forEach(()=>{
        const butonsCreate = createButtons(categories);
        genderButtons.appendChild(butonsCreate);
    });
}

const createButtons = (categories) => {

    const genderListButtons = document.querySelector(".gender__buttons-list");

    
    categories.forEach((nome) => {
        const listButtons = document.createElement("li");
        const genderButtons = document.createElement("button");
        genderButtons.classList.add("gender__buttons-select");
        
        genderButtons.innerText = nome;
        
        listButtons.append(genderButtons);
        
        genderListButtons.append(listButtons);

        return genderButtons;
    })

}

const filterCategories = (products) => {
    const buttonCategory = document.querySelector("button");

    buttonCategory.addEventListener('click', () => {
        const buttonFilter = products.filter(() => products.category = buttonCategory.value)

        render(buttonFilter)
    })

}

const filterInputRange = (array) => {

    const inputRange = document.querySelector("#filter__input");

    inputRange.addEventListener('input', () => {

        const parag = document.querySelector("#filter__price");
        
        const filterRangeArray = array.filter((products) => products.price <= Number(inputRange.value));
        
        parag.innerText = `${parag.textContent}${inputRange.value}`;

        render(filterRangeArray);
    })
} 

filterInputRange(products);
darkModeAdd();
render();
renderButtons();
createCard();
createButtons();
filterCategories();