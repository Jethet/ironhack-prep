// Define a function, name it however you prefer respecting the good naming conventions,
// that will do the same as we did earlier - loop through the array and print the type
// of each element of the array in the console.

const someArr = ["max", 34, true, {name: "sandra", student: true}, 
["javascript", "mongodb", "react"]];

someArr.forEach(elementType => {
    console.log(typeof elementType);
});


// Define a function getCredentials() that will receive the following object
// as argument and print the following result:

let user = {
    username: "ironhacker",
    password: "123iron345"
  };
  
  // => expected output:
  // Username is: ironhacker and the password is: 123iron345.


//Define a function checkProperty() that will use the following object passed as
    // an argument to print the output in the console:

    let property = {
        owner: {
          firstName: "John",
          lastName: "Doe",
          age: 44
        },
        isForSale: true,
        sqrm: 120,
        address: {
          street: "Happy St",
          number: 123,
          city: "Miami",
          state: "FL",
          country: "US"
        },
        amenities: ["pool", "tennis court", "private parking", "yard"]
      };
      
     function checkProperty(){
         if (property.isForSale === true){
             console.log(`The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities: `); 
             for (let i = 0; i<property.amenities.length; i++)
             {console.log(`${i+1} - ${property.amenities[i]}`);
            }
         } else {
             console.log(`The home in ${property.address.street} ${property.address.number} is not for sale.`);
         }
      }
     
     checkProperty(property);