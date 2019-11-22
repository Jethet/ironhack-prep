// Print (console.log()) value of the property name in the given object:
let student = {
    name:"Max",
    age: 27
};
console.log(student.name);

/*
Find the value of the price property and if it is greater than 100, discount it
by 10%. If that’s not the case, discount it by 7%. Update the object with :
  - the new property - discount and the corresponding value (7% or 10%)
  - the new price.
*/
let product = {
    name: "headphones",
    price: 100
};

if (product.price > 100){
  let discount = 10 / 100;
  let discPrice = product.price - (product.price * discount);
  product.price = discPrice;
  product.discount = discount;
} else {
  discount = 7 / 100;
  discPrice = product.price - (product.price * discount);
  product.price = discPrice;
  product.discount = discount;
}

console.log(product.price);
console.log("Updated product:", product);
