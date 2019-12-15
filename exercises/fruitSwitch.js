// Use switch on 'fruit case' example

const fruit = prompt("Enter the fruit name");
let type = "";

switch (type) {
  case "pear":
  case "apple":
    type = "pome";
    break;
  case "peach":
  case "coconut":
    type = "drupe";
    break;
  case "strawberry":
  case "blueberry":
  case "blackberry":
    type = "berry";
    break;
  case "beans":
  case "peas":
    type = "legumes";
    break;
  default:
    type = "other";
    break;
}

console.log(`${fruit} is type of: ${type}.`);

// This does not run: 'ReferenceError: prompt is not defined'
// I have not worked with prompt yet. I wonder if const fruit versus type
// causes the error.
