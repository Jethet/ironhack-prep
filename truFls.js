let a = "Barcelona";
let b = "Madrid";

if (a.length > b.length) {
  console.log("The number of characters in " + a + " is greater than in " + b);
}

let word = "web";
let sentence = "I enrolled Ironhack because I love web development.";
console.log(sentence.includes(word));

let num = 219;
if (num % 2 === 1){
  console.log("odd");
} else {
  console.log("even");
}

// Not sure if I understand this exercise: this is for the three years given,
// but maybe the intention was to use a loop?

let year = 2019;

if (year < 100){
  console.log("1st century");
} else if (year >= 100 && year < 200){
  console.log("2nd century");
} else if (year >= 2000 && year < 2100){
  console.log("21st century");
}
