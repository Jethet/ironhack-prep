//Find out if there is a specific word in the string:
const str1 = "Web Dev is amazing!";
    // => look for each of these separately:
    // - "development",
    // - "Development",
    // - "web",
    // - "ing",
    // - "Web"
console.log(str1.includes("development"));
console.log(str1.includes("Development"));
console.log(str1.includes("web"));
console.log(str1.includes("ing"));
console.log(str1.includes("Web"));


//Concatenate the following strings:
let str2 = "Hey!";
let str3 = "How are you?";
// end result: "Hey! How are you?"
console.log(str2 + " " + str3);

let str4 = 10;
let str5 = 99;
// end result: 1099
console.log(str4 * 100 + 99);

//Take out half of the sentence:
let sentence = "This is one meaningless sentence which needs to be cut in half.";
// end result: This is one meaningless sentence
console.log(sentence.length);
console.log(sentence.slice(0,32));
console.log(sentence.slice(32, 63));

/* Capitalize:
a) the whole name of the city where you are now
b) the first letter of the city
c) capitalize the middle letter if the city has an odd number of letters or
two middle letters if the city has even number of letters
(hint: you can use .charAt() and .slice())
*/
let city = "Barcelona";
console.log(city.toUpperCase());
console.log(city[0].toUpperCase());
console.log(city[4].toUpperCase());
