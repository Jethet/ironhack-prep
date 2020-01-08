let phone = {
    brand: "Apple",
    type: "iPhone",
    model: "X",
    characteristics: {
        capacity: "256 GB",
        size: {
            height: "xxx inch",
            width: "yyy inch",
            depth: "zz inch"
        }
    },
    chip: ["bionic", "neural engine", "embedded processor"]
};

function getCharac(somePhone) {
    console.log(`The ${somePhone.type} by ${somePhone.brand.toUpperCase()} has the following characteristics:
    1. capacity: ${somePhone.characteristics.capacity},
    2. dimensions: ${somePhone.characteristics.size.height} +
     ${somePhone.characteristics.size.width}
      + ${somePhone.characteristics.size.depth} as well as the chip specs`);
      for (let i = 0; i < somePhone.chip.length; i++ ) {
          console.log(`${i + 1} - ${somePhone.chip[i]}`);
      }

}

getCharac(phone);

// Desired output: 
// iPhone X by APPLE has the following characteristics: 
//   1. capacity: 256 GB,
//   2. dimensions: 5.65 inches x 2.79 inches x 0.3 inches, as well as the chip specs:
// 1 - bionic
// 2 - neural engine
// 3 - embedded motion processor