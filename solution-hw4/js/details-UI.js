const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const rollType = params.get("roll");

// Updating the UI based on the URL Param

const title = document.querySelector("title");

const pageTitle = document.querySelector(".page-title-container > h1")

title.innerText, pageTitle.innerText = `${rollType} Cinnamon Roll`;

// Get the Image and Price variables for the selected roll and update UI

let currentRoll = rolls[rollType];

const priceElement = document.querySelector("#product-total-price");
priceElement.innerText = `$ ${currentRoll.basePrice}`;

const rollImage = document.querySelector(".image-container > img");
rollImage.setAttribute("src", `assets/${currentRoll.imageFile}`);
rollImage.setAttribute("alt", `${rollType} Cinnamon Roll`);