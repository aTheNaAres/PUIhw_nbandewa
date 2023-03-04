const addToCartBox = document.querySelector(".addtocart-button")

const cart = [];

// From assignment description
class Roll {

  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

function updateButton() {

}

function addToCart() {
  let type = rollType;
  let glazingOption = allGlazingOptions[glazingSelectBox.value].displayName;
  let sizeOption = allPackSizeOptions[packSizeSelectBox.value].displayName;
  let price = currentRoll.basePrice;

  // Construct the new Instance and add it to the Cart array
  let newCartItem = new Roll(type, glazingOption, sizeOption, price);
  cart.push(newCartItem)
  console.log(cart)
}

// Call the addToCart function everytime we click on the button

addToCartBox.addEventListener('click', addToCart);