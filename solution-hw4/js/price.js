// All Glazing and Pack Size Options

const allGlazingOptions = {
  "keep-original": {
    price: 0,
    displayName: "Keep Original"
  },
  "sugar-milk": {
    price: 0,
    displayName: "Sugar Milk"
  },
  "vanilla-milk": {
    price: 0.5,
    displayName: "Vanilla Milk"
  },
  "double-chocolate": {
    price: 1.5,
    displayName: "Double Chocolate"
  }
};

const allPackSizeOptions = {
  "pack-of-1": {
    price: 1,
    displayName: "1"
  },
  "pack-of-3": {
    price: 3,
    displayName: "3"
  },
  "pack-of-6": {
    price: 5,
    displayName: "6"
  },
  "pack-of-12": {
    price: 10,
    displayName: "12"
  }
};

// Function to add options to a SelectBox
function addOptions(dict, selectBox) {
  for (let key in dict)
  {
    let option = document.createElement("option");
    option.text = dict[key].displayName;
    option.value = key;
    selectBox.add(option, undefined);
  }
}

const glazingSelectBox = document.querySelector("#glazing-options");
const packSizeSelectBox = document.querySelector("#pack-size");

addOptions(allGlazingOptions, glazingSelectBox);
addOptions(allPackSizeOptions, packSizeSelectBox);

// This can be adapted later to change for each item in the gallery
let basePrice = parseFloat(document.querySelector("#product-total-price").textContent.substring(1).trim());

// Function to update the total price in the UI
function updatePriceElement(price) {
  let priceElement = document.querySelector("#product-total-price");
  priceElement.innerHTML = `$ ${price}`;
}

// Compute the New Price
function priceChange() {
  let glazingPrice = parseFloat(allGlazingOptions[glazingSelectBox.value].price);
  let sizePrice = parseFloat(allPackSizeOptions[packSizeSelectBox.value].price);
  // Limit to two decimals
  let updatedPrice = ((basePrice + glazingPrice) * sizePrice).toFixed(2);

  // Call the function to update the UI
  updatePriceElement(updatedPrice);
}

//  Add Event Listeners for both selectboxes and call the same function on change
glazingSelectBox.addEventListener('change', priceChange);
packSizeSelectBox.addEventListener('change', priceChange);

//  Update the UI to show the price for the default options
priceChange();