// Exercise 1
// const p1 = {
//     name:"John", 
//     age:"42",
//     city: "TLV"
// }
// const p2 = {
//     name:"Beth", 
//     age:"32",
//     city: "London"
// }

// message = (p1.age == p2.age) ? ((p1.city == p2.city) ? "Jill wanted to date Robert" : "Jill wanted to date Robert, but couldn't"):""; 
// console.log(message);

// Exercise 2

// myList = [
//     {
//         name: "Tofy", 
//         breed: "Terrier & Schnauzer",
//         isAlive: false
//     },
//     {
//         name: "Tito", 
//         breed: "Miniature Pinscher",
//         isAlive: true
//     }
// ];

// myList[0].color = "cream";
// myList.pop();
// console.log(myList.length);
// console.log(myList);

//Exercise 3

// myNewList = [
//     {
//         name: "Foxy", 
//         breed: "fox like",
//         isAlive: false
//     },
//     {
//         name: "Rite", 
//         breed: "unknown",
//         isAlive: false
//     }
// ];

// myList.push(...myNewList);
// console.log(myList);

//Exercise 4
// library = {
//     books: [
//         {title: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling"}, 
//     ]
// }

// myList.push(library);
// console.log(myList);

//Exercise 5
// const reservations = {
//     bob: { claimed: false },
//     ted: { claimed: true }
//   }
  
// let name = prompt('Please enter the name for your reservation');
// name = name.toLowerCase();

// if(name in reservations) {
//     if(reservations[name].claimed){
//         alert("You're reservation has been claimed already");
//     } else {
//         alert(`Welcome ${name}! `);
//     }
// } else {
//     reservations[name] = {cliamed:true}
//     alert("There's no existing resrvation");
//     console.log(reservations);
// }

//Exercise 5.1 - Done
//Exercise 5.2 - Done

//Extension

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: true,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
if( hasOven && fridgeWorks){
    
} else if(hasOven){
    
} else if(fridgeWorks){
    
} else {
    
}