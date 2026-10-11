const order = {
  id: "ORD-4521",
  customer: {
    name: "Siti Rahma",
    contact: {
      email: "siti@example.com",
      phone: "0812-3456-7890"
    }
  },
  items: [
    { sku: "A1", title: "Keyboard", price: 450000 },
    { sku: "B2", title: "Mouse", price: 150000 }
  ],
  shipping: {
    method: "express"
    // note: no `cost` property here
  }
};

const [a, b, ...others] = [1, 2, 3, 4, 5]

let x = 10;
let y= 20;

[x, y] = [y, x]

console.log(x);
console.log(y);

console.log(a) // 1
console.log(b) // 2
console.log(others) //3, 4, 5 


const {id, customer:{name, contact:{email} }, shipping:{method: shippingMethod, cost = 25000}, items:[firstItem, {title: secondTitle}] } = order

function formatItem({title, price}) {
  return `${title}: Rp${price}`;
}