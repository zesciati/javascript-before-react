const cart = {
  userId: "U-102",
  items: ["Keyboard", "Mouse"],
  discount: 10
};

const updatedCart = {
  ...cart, discount: 20, coupon:"NEWUSER"
};

const extraItems = ["Monitor", "Webcam"];

const prices = [450000, 150000, 900000, 300000];

const allItems = [...cart.items, ...extraItems];
const itemsWithHeadphones = [...cart.items, "Headphones"];
const itemsWithPad = ["Mousepad" , ...cart.items];
const maxNumber = Math.max(...prices);

const safeCopy = { ...cart, items: [...cart.items] };
safeCopy.items.push("Speaker");


const copyNew = [...cart.items, "Speaker"]
console.log(copyNew);


console.log(allItems);
console.log(cart.items);
console.log(safeCopy.items);
console.log(itemsWithHeadphones);
console.log(maxNumber);