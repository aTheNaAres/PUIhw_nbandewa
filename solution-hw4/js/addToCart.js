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

function addToCart() {
  let glazingOption = glazingSelectBox.options[glazingSelectBox.selectedIndex].innerHTML;
  let sizeOption = packSizeSelectBox.options[packSizeSelectBox.selectedIndex].innerHTML;
  let price = currentRoll.basePrice;
  let type = rollType;

  // Construct the new Instance and add it to the Cart array
  let newCartItem = new Roll(type, glazingOption, sizeOption, price);
  cart.push(newCartItem)
  console.log(cart)
}

// Call the addToCart function everytime we click on the button
const addToCartBox = document.querySelector(".addtocart-button")

addToCartBox.addEventListener('click', addToCart);