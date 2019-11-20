/*
Perform a few operations on the given array:
  add two of your favorite animals to the end of the array,
  remove the first two elements of the array,
  replace the last element in the array with the word “last”.
*/
/*
const animalArray = ["dog", "cat", "fish"];

animalArray.push("falcon", "whale");
console.log(animalArray);

animalArray.splice(0, 2);
console.log(animalArray);

animalArray.splice(-1, 1, "last");
console.log(animalArray);

/*
Create an array with 6 of your favorite foods. With the loop of your choice,
iterate through the array, but only print out the foods with an even index.
*/

const myArray = ["bravas", "pimientos", "setas", "croquetes", "tortilla", "albondigas"];

for (let i = 0; i < myArray.length; i++){
  if (i % 2 === 0) {
    console.log(myArray[i]);
  }
}





/*
myArray.forEach(element => {
  if (myArray.length % 2 === 0){
  console.log(element);
  element++;
  }
});
*/
