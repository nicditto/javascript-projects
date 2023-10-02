let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};


// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
for (item in tortoiseOne){
   console.log( item + "," + tortoiseOne[item]);
}

// Giraffe For In Loop
let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

for (item in giraffe) { // for each item in giraffe
   console.log(item + "," + giraffe[item]); // print the item name and value
}
//update