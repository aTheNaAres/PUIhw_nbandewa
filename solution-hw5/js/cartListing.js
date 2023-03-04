class Roll {

  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

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

let cartListings = [["Original", "sugar-milk", "pack-of-1", 2.49],
                    ["Walnut", "vanilla-milk", "pack-of-12", 3.49],
                    ["Raisin", "sugar-milk", "pack-of-3", 2.99],
                    ["Apple", "keep-original", "pack-of-3", 3.49]];

let cartItemPrices = {};

updateTotal();
populateCart();

function populateCart() {
  for (i = 0; i < cartListings.length; i++) {
    detailsArray = cartListings[i];
    
    let newCartItem = new Roll(detailsArray[0], detailsArray[1], detailsArray[2],
                                detailsArray[3]);

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
  let imagePath = "assets/" + rolls[detailsArray[0]]["imageFile"];
  template.querySelector(".product-image > img").src = imagePath;
  template.querySelector(".product-image > img").alt = `${detailsArray[0]} Cinnamon Roll`;
  
  // Add The Remove Button
  template.querySelector(".drop-item").innerHTML = "Remove";

  // Add Product Details
  template.querySelectorAll(".product-details > p")[0].innerHTML = `${detailsArray[0]} Cinnamon Roll`;

  glazingOption = allGlazingOptions[detailsArray[1]].displayName;
  template.querySelectorAll(".product-details > p")[1].innerHTML = `Glazing: ${glazingOption}`;

  packSizeOption = allPackSizeOptions[detailsArray[2]].displayName;
  template.querySelectorAll(".product-details > p")[2].innerHTML = `Pack Size: ${packSizeOption}`;

  // Add the Price for the Item
  let itemPrice = calculateItemPrice(rolls[detailsArray[0]].basePrice, 
                                    allGlazingOptions[detailsArray[1]].price,
                                    allPackSizeOptions[detailsArray[2]].price);
                                    template.querySelector(".product-price > p").innerHTML = `$${itemPrice}`;

  // Add the price of the item to the Total
  console.log(itemPrice)
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
  updateTotal();
}