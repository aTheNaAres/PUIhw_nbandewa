// All Glazing and Pack Size Options as separate arrays

const allGlazingOptions = [
  {
    name: "Keep Original",
    value: 0
  },
  {
    name: "Sugar Milk",
    value: 0
  },
  {
    name: "Vanilla Milk",
    value: 0.5
  },
  {
    name: "Double Chocolate",
    value: 1.5
  }
];

const allPackSizeOptions = [
  {
    name: "1",
    value: 1
  },
  {
    name: "3",
    value: 3
  },
  {
    name: "6",
    value: 5
  },
  {
    name: "12",
    value: 10
  }
];

// Function to add options to a SelectBox
function addOptions(array, selectBox) {
  for (let index = 0; index < array.length; index++)
  {
    let item = array[index];
    let option = document.createElement('option');
    option.text = item.name;
    option.value = item.value;
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
  let glazingPrice = parseFloat(glazingSelectBox.options[glazingSelectBox.selectedIndex].value);
  let sizePrice = parseFloat(packSizeSelectBox.options[packSizeSelectBox.selectedIndex].value);
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