/* Game of multiples: print numbers 1 - 50
   if number divisible by 5, skip
   if number is divisible by 10 or 15, print "Donkey!"
   if number not divisible by 2 and  previous number is divisible by 10,
   print "Monkey!"
*/

for (let i = 0; i <= 50; i++){
  if (i % 5 === 0) { continue; }
  else if (i % 10 === 0 || i % 15 === 0){
    console.log("Donkey");
  } else if (i % 2 !== 0 && (i - 1) % 10 === 0){
    console.log("Monkey!");
  }
}
