//Spot Check 1

// const car = {
//     color: "green", 
//     numWheels: 4, 
//     isFancy: false
// }
// let isOrIsnt = (car.isFancy) ?  "is" : "isn't" ;
// console.log(`The ${car.color} car has ${car.numWheels} and ${isOrIsnt} Fancy`);

// Spot Check 2

// const myObj = {
//     item: "shoe", 
//     toBeggining: false, 
//     items: ["keys", "cloths", "cutlery"]
// }

// let operation = (myObj.toBeggining) ? "push" : "unshift";
// eval(`myObj.items.${operation}(myObj.item);`);
// console.log(myObj.items);

//Spot chack 3 
const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

human["name"] = babyNameValue;
human["name"] = "Johnn";

console.log(human);
