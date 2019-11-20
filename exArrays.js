/*
Perform a few operations on the given array:
  add two of your favorite animals to the end of the array,
  remove the first two elements of the array,
  replace the last element in the array with the word “last”.

const animalArray = ["dog", "cat", "fish"];
animalArray.push("falcon", "whale");
console.log(animalArray);

animalArray.splice(0, 2);
console.log(animalArray);

animalArray.splice(-1, 1, "last");
console.log(animalArray);

// Create an array with 6 of your favorite foods. With the loop of your choice,
// iterate through the array, but only print out the foods with an even index.

const myArray = ["bravas", "pimientos", "setas", "croquetes", "tortilla", "albondigas"];

for (let i = 0; i < myArray.length; i++){
  if (i % 2 === 0) {
    console.log(myArray[i]);
  }
}

// Check if the word appears in given array and print out if it does or doesn’t:
let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par", "miami", "ams", "ber", "paris", "lis", "mad"];
console.log(arr.includes(word));

// Loop through arr but stop looping after "miami" is found
let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par", "miami", "ams", "ber", "paris", "lis", "mad"];

for (let i = 0; i <= arr.length; i++){
  if (arr[i] !== "miami"){
    console.log(arr[i]);
  } else {
    console.log(arr[i]);
    break;
  }
}
*/


//Given array of numbers, calculate the sum:

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (let i = 0; i < prices.length; i++) {
  console.log(Math.round((sum += prices[i]) * 10) / 10);
}

//Bonus: Round the sum to one decimal.
