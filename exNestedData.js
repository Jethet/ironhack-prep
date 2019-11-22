/* Using the given array of objects:
        display price of iPhone,
        display both phones’ names,
        add a new phone at the beginning of the array,
        remove the last element of the array
*/
let products = [
    {
        name: "iPhone",
        price: 799.99
    },
    {
        name: "Samsung Galaxy S10",
        price: 900.00
    }
];

console.log(products[0].price);
console.log(products[0].name, products[1].name);

let newPhone = {
  name: "Fairphone",
  price: 250
};

products.unshift(newPhone);
products.pop();

console.log(products[0].price);
console.log(products[0].name, products[1].name);
console.log(products);
