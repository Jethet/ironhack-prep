/* Using the given array of objects:
        display price of iPhone,
        display both phones’ names,
        add a new phone at the beginning of the array,
        remove the last element of the array
*/
/*let products = [
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
console.log(products); */

/*
    Given the array, print:
        your course type (full-time or part-time)
        the most familiar topic
        the least familiar topic
*/
/*let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};

console.log(course.type[0]);
console.log(course.topics[0]);
console.log(course.topics[5]); */

let student = {
  firstName: "Ana",
  lastName: "Blair",
  course: {
    name: "Web Development",
    type: "part-time"
  },
  attendedIn: "Madrid",
  address: {
    street: "Happy Street",
    number: 123,
    city: "Barcelona",
    zip: 08015,
    country: "Spain"
  }
};

console.log(student.course.name); // => Web Development
console.log(student.address.street); // => Happy Street
console.log(student.address.city = "Madrid");
// => Ana moved from Barcelona to Madrid to take part-time Web Development course.
console.log(student);  // City has changed into Madrid.
