const user = {
  name: "Siti",
  age: 20,
  isMember: true,
  balance: 80000,
  address: null
};

const cartTotal = 60000;
const stock = 5;
const score = 76;

let canBuy = (stock > 0 && user.balance >= cartTotal);
let isGradeB = (score > 75 && score < 89);
let discountMessage = (user.isMember == true && cartTotal > 50000 )? "Discount applied" : "No Discount";

let isAdultMember = (user.age > 18 && user.isMember)
let usering = (user.name && user.name.toUpperCase())

console.log(true && false); // true
console.log(0 && "hello"); // 0
console.log("hi" && "hello"); //hello
console.log("" && 5); // empty string
console.log(5 && "ok" && 10); // 10


console.log(canBuy);
console.log(isGradeB);
console.log(discountMessage);
console.log(isAdultMember);
console.log(usering);

console.log("Siti" && "Siti".toUpperCase());
console.log("" && "".toUpperCase());
console.log(undefined && undefined.toUpperCase());