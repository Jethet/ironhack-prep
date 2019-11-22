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

if ("discount" in product){
  console.log(`Already discounted by ${discount}.`);
}

/*
Use given object and loop through its properties and if it has property “discount”
print “Already discounted by…” and add the value (how much was the discount).
In opposite case, do what you did in the previous exercise: check the price,
depending on it (if it’s greater or lower than 100) add discount (10% or 7%)
and add the property “discount” to the object.
*/

let prod = {
    name: "headphones",
    price: 83.7,
    discount: "7%"  // This can be commented out to test without the key "discount"
};

for (let key in prod){
  if (key === "discount"){
    console.log(`Already discounted by ${prod.discount}.`);
    break;
  }
    else if (prod.price > 100){
    let discount = 10 / 100;
    let discPrice = prod.price - (prod.price * discount);
    prod.price = discPrice;
    prod.discount = discount;
    } else {
    discount = 7 / 100;
    discPrice = prod.price - (prod.price * discount);
    prod.price = discPrice;
    prod.discount = discount;
  }
}
console.log("Updated product:", prod);
