
const user = {
  name: "Siti",
  age: 17,
  isMember: true,
  balance: 80000
};

const cartTotal = 120000;
const stock = 0;
const score = 76;


let ageStatus = (user.age < 18) ? "minor":"adult";

let greeting = user.isMember ? `Welcome back, ${user.name}` :"Welcome, guest";

let finalTotal = user.isMember ? (cartTotal * 0.9): cartTotal;

let canPay = (user.balance > finalTotal) ? "Payment OK":"Insufficient balance"; 

let grade = (score >= 90) ? "A": (score >= 75 || score <= 89) ? "B": (score >= 60 || score <= 74) ? "C": (score <= 60) ? "D" : "50";

let checkStock = (stock > 0) ? "In stock":"Sold out";

let message = (user.balance > 100000) ? "Rich":"Normal";

console.log(ageStatus);
console.log(greeting);
console.log(finalTotal);
console.log(canPay);
console.log(grade);
console.log(checkStock);
console.log(message);