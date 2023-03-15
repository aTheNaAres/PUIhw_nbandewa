// Initialize the cart
let cart = [];

// If a cart already exists this will repopulate it
if (localStorage.getItem("storedRolls") != null) {
  retrieveFromLocalStorage();
}

function saveToLocalStorage() {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("storedRolls", cartString);
}

function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem("storedRolls");
  const cartArray = JSON.parse(cartString);
  for (const cartData of cartArray) {
    const roll = new Roll(cartData.type, cartData.glazing, 
                    cartData.size, cartData.basePrice);
    cart.push(roll)
  }
}