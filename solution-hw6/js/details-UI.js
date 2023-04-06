// Adapted From Homework Solutions

let glazingOption = "keep-original";
let packSizeOption = "pack-of-1";
let basePrice = 0;
let rollType = NaN;

updateDetailsUI();
populateSelectOptions();

function updateDetailsUI() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  
  rollType = params.get("roll");

  // Updating the Image
  const imagePath = "assets/" + rolls[rollType]["imageFile"];
   
  const imageElement = document.querySelector(".image-container > img");
	imageElement.src = imagePath;
  imageElement.alt = `${rollType} Cinnamon Roll`;

  // Updating the UI based on the URL Param
  const title = document.querySelector("title");
  const pageTitle = document.querySelector(".page-title-container > h1");
  title.innerText, pageTitle.innerText = `${rollType} Cinnamon Roll`;
  
  const price = rolls[rollType]["basePrice"];
  basePrice = parseFloat(price);
  updateTotalPrice();
}

function populateSelectOptions() {
	// Populate glazing options with corresponding price adaptation values
	const glazingSelect = document.querySelector("#glazing-options");

	for (key in allGlazingOptions) {
		const option = document.createElement("option");
		option.textContent = allGlazingOptions[key].displayName;
		option.value = key;
		glazingSelect.appendChild(option);
	}

	// Populate pack options with corresponding price adaptation values
	const packSelect = document.querySelector("#pack-size");

	for (key in allPackSizeOptions) {
		const option = document.createElement("option");
		option.textContent = allPackSizeOptions[key].displayName;
		option.value = key;
		packSelect.appendChild(option);
	}
}

function glazingChange(element) {
	glazingOption = element.options[element.selectedIndex].value;
	updateTotalPrice();
}

function packChange(element) {
	packSizeOption = element.options[element.selectedIndex].value;
	updateTotalPrice();
}

function updateTotalPrice() {
  const glazingPrice = allGlazingOptions[glazingOption].price;
	console.log(allGlazingOptions)
	const packPrice = allPackSizeOptions[packSizeOption].price;
	const totalPrice = (basePrice + glazingPrice) * packPrice;
	const totalPriceField = document.querySelector("#product-total-price");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

function addToCart() {
	let roll = new Roll(rollType, glazingOption, packSizeOption, basePrice);
  cart.push(roll)
  saveToLocalStorage();
  console.log(cart)
}