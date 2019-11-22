/* First: Using the given array of objects:
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

/* Second:  Given the array, print:
            your course type (full-time or part-time)
            the most familiar topic
            the least familiar topic
*/
let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};

console.log(course.type[0]);
console.log(course.topics[0]);
console.log(course.topics[5]);

// Third: Given the object with nested objects in it, print:
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

// Fourth: Given a 2D array, print the following:
const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];

console.log(ironCampuses[0][1]); // => Miami
console.log(ironCampuses[1][0]); // => Amsterdam
console.log(ironCampuses[1][5]); // => Paris

// Fifth: Use the example from the lesson with frameworks to retrieve the following:
let basic = {
  language: "JavaScript",
  frameworks: [
    {
      end: "back",
      list: [
        {
          name: "ExpressJS",
          released: 2010
        },
        {
          name: "MeteorJS",
          released: 2012
        }
      ]
    },
    {
      end: "front",
      list: [
        {
          name: "ReactJS",
          released: 2013
        },
        {
          name: "VueJS",
          released: 2014
        }
      ]
    }
  ]
};

console.log(basic.frameworks[0].list[0].name);

let firstElement = basic.frameworks[0].list[0].name;
let secondElement = basic.frameworks[1].list[0].name;
console.log(`At Ironhack, I'll learn ${firstElement} and ${secondElement}.`);
