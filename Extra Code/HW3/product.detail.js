let allGlazingOptions = [
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
]

let allPackSizeOptions = [
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
]

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

let glazingSelectBox = document.querySelector("#glazing-options");
let packSizeSelectBox = document.querySelector("#pack-size");

addOptions(allGlazingOptions, glazingSelectBox);
addOptions(allPackSizeOptions, packSizeSelectBox);

// This can be adapted later to change for each item in the gallery
let basePrice = parseFloat(document.querySelector("#product-total-price").textContent.substring(1).trim());

function updatePriceElement(price) {
  priceElement = document.querySelector("#product-total-price")
  priceElement.innerHTML = `$ ${price}`;
}

function priceChange() {
  let glazingPrice = parseFloat(glazingSelectBox.options[glazingSelectBox.selectedIndex].value);
  let sizePrice = parseFloat(packSizeSelectBox.options[packSizeSelectBox.selectedIndex].value);
  updatedPrice = ((basePrice + glazingPrice) * sizePrice).toFixed(2);

  updatePriceElement(updatedPrice);
}


// function glazingChange() {
//   let priceChange = parseFloat(this.value);

//   let updatedPrice = (basePrice + priceChange);

//   updatePriceElement(updatedPrice)
// }

// function packSizeChange() {
//   let priceChange = parseFloat(this.value);

//   let updatedPrice = (basePrice * priceChange).toFixed(2);

//   updatePriceElement(updatedPrice)
// }

glazingSelectBox.addEventListener('change', priceChange)
packSizeSelectBox.addEventListener('change', priceChange)

updatePriceElement(basePrice);

// glazingChange();
// class glazingOptions {
//   name;
//   priceAdaptation;

//   constructor(name, price) {
//     this.name = name;
//     this.price = priceAdaptation;
//   }

//   selectBox = document.querySelector("#glazing-options")
// }

// keepOriginal = new glazingOptions("Keep Original", 0)

// class packSizeOptions {
//   name;
//   priceAdaptation;
// }