// Define the class Roll

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
  }

// All Rolls available

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

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