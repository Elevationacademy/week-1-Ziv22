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

myList = [
    {
        name: "Tofy", 
        breed: "Terrier & Schnauzer",
        isAlive: false
    },
    {
        name: "Tito", 
        breed: "Miniature Pinscher",
        isAlive: true
    }
];

myList[0].color = "cream";
myList.pop();
console.log(myList.length);
// console.log(myList);

//Exercise 3

myNewList = [
    {
        name: "Foxy", 
        breed: "fox like",
        isAlive: false
    },
    {
        name: "Rite", 
        breed: "unknown",
        isAlive: false
    }
];

myList.push(...myNewList);
console.log(myList);