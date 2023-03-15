let cartItemPrices = {};

populateCart();
updateTotal();

function populateCart() {
  for (i = 0; i < cart.length; i++) {
    detailsArray = cart[i];    
    let newCartItem = new Roll(detailsArray.type, detailsArray.glazing, detailsArray.size,
                                detailsArray.basePrice);

    let cartTemplate = document.querySelector("template");
    const cartWrapper = document.querySelector(".cart-wrapper");

    // Create a Copy of the Template Content To Adapt to New Listings
    let templateCopy = cartTemplate.content.cloneNode(true);
    templateCopy.querySelector(".cart-listing").id = `Item ${i}`;
      
    populateItemDetails(templateCopy);
    // Prepend The Item Listing (For Cart normally the latest item is on top)
    cartWrapper.prepend(templateCopy);
  }
}

function populateItemDetails(template) {
  // Set the Image of the Rolls
  let cartItemImage = "assets/" + rolls[detailsArray.type]["imageFile"];
  template.querySelector(".product-image > img").src = cartItemImage;
  template.querySelector(".product-image > img").alt = `${detailsArray.type} Cinnamon Roll`;
  
  // Add The Remove Button
  template.querySelector(".drop-item").innerHTML = "Remove";

  // Add Product Details
  template.querySelectorAll(".product-details > p")[0].innerHTML = `${detailsArray.type} Cinnamon Roll`;

  glazingOption = allGlazingOptions[detailsArray.glazing].displayName;
  template.querySelectorAll(".product-details > p")[1].innerHTML = `Glazing: ${glazingOption}`;

  packSizeOption = allPackSizeOptions[detailsArray.size].displayName;
  template.querySelectorAll(".product-details > p")[2].innerHTML = `Pack Size: ${packSizeOption}`;

  // Add the Price for the Item
  let itemPrice = calculateItemPrice(rolls[detailsArray.type].basePrice, 
                                    allGlazingOptions[detailsArray.glazing].price,
                                    allPackSizeOptions[detailsArray.size].price);
                                    template.querySelector(".product-price > p").innerHTML = `$${itemPrice}`;

  // Add the price of the item to the Total
  let listingID = template.querySelector(".cart-listing").id;
  cartItemPrices[listingID] = parseFloat(itemPrice);
  updateTotal();
}

function calculateItemPrice(basePrice, glazingPrice, packPrice) {
  return ((basePrice + glazingPrice) * packPrice).toFixed(2)
}

function updateTotal() {
  let prices = [];
  for (key in cartItemPrices) {
    prices.push(cartItemPrices[key])
  }

  // From https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  function add(sum, newValue) {
    // Limit to 2 Decimals, although it has been done before add for redundancy and convert to Float
    return parseFloat((sum + newValue).toFixed(2))
  }

  let totalPrice = prices.reduce(add, 0);
  let totalPriceElement = document.querySelector(".total-price");
  totalPriceElement.innerHTML = `$${totalPrice}`
}

// Remove Item Functionality
function dropItem(element) {
  let listingID = element.parentElement.parentElement.id;
  delete cartItemPrices[listingID];
  element.parentElement.parentElement.remove();
  // Remove it from the cart in localStorage
  cart.splice(listingID, 1);
  updateTotal();
  // Save the cart back to the Local Storage
  saveToLocalStorage();
  console.log(cart)
}