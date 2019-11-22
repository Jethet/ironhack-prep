/*
// Define function welcome() that will receive one argument, your name, 
// and greet you with your name.
function welcome(name){
    console.log(`Hello ${name}!`);
}
welcome("Frank");

// Define a function printToTwenty() that will print the numbers from 0 to 20 to
// the console ( don’t forget we have to invoke/call the function to see it working
function printToTwenty(){
    for(i = 0; i <= 20; i++){
        console.log(i);
    }
}
printToTwenty();

// Define a function printNumbers() that receives one argument and prints the numbers
// from 0 to whatever number we pass to it as an argument
function printNumbers(num){
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}
printNumbers(12);


// Define a function printArrElements(someArr) that will loop through array and print
// all the elements of that array. Use the following array to pass it as an argument 
function printArrElements(someArr){
    for(let i = 0; i < someArr.length; i++){
        console.log(someArr[i]);
    }
}
let ironCities = ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo" ];
printArrElements([ironCities]);
let favCities = ["Barcelona", "Bangalore", "London", "New York", "Boston", "Paris"];
printArrElements([favCities]);
let favFood = ["lentilsoup", "bravas", "albondigas", "sate", "sauerkraut"];
printArrElements([favFood]);


// Define a function printEvens(someArr) and use the ironCities array and print only
// its even elements. The output should be:
// Amsterdam
// Berlin
// Madrid
// Miami
// Sao Paulo

function printEvens(someArr){
    for(let i = 0; i < someArr.length; i++){
        if (i % 2 === 0){
        console.log(someArr[i]);
        }
    }
}
printEvens(["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo" ]);
*/

/* Define a function that will receive an array as an argument and calculate a sum of all
   its elements. Example, if we pass the following array to that function: 
   const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. 
   How would you concatenate $ sign in front of the sum? */