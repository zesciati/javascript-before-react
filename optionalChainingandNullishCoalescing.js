const user = {
  name: "Siti",
  profile: {
    address: { city: "Makassar" },
    socials: null
  },
  orders: [
    { id: "ORD-1", items: ["Keyboard", "Mouse"] },
    { id: "ORD-2", items: [] }
  ],
  getFullName() {
    return "Siti Rahma";
  }
};

const guest = { name: "Tamu" };

const data = { count: 0 };
console.log(data.count?.toFixed(1));

// basically asking is profile exist, asking address exist
const city = user.profile?.address?.city;
const guestCity = guest.profile?.address?.city;
const cityLabel = guestCity ?? "Unknown";  
const firstItemOfSecondOrder = user.orders?.[1]?.items[0];
const thirdOrderId = user.orders?.[2]?.id;
const callGetFullName = user.getFullName?.();
const callGuest = guest.getFullName?.();
const c = user?.profile?.address?.city;

console.log(city);
console.log(guestCity);
console.log(cityLabel);
console.log(firstItemOfSecondOrder)
console.log(thirdOrderId)
console.log(callGetFullName)
console.log(callGuest)
console.log(c)
console.log(data) //because ? only active when the value is null and undefined


console.log(user?.name); // it will run and show "Siti"
console.log(guest?.profile?.address); // it will return undefined
console.log(user.profile.socials?.twitter); // it will return undefined
console.log(null?.name); // it will return undefined
// console.log(guest.profile.address); // it will crash