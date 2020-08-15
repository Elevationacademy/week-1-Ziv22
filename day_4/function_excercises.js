//Exc 1
// const calcAge = function(currentTime , birth) {
//     return currentTime - birth; 
// }
//Exc 2
// const calcAge = function(currentTime , birth) {
//     let maxAge =  currentTime - birth;
//     console.log(`You are either ${maxAge} or ${maxAge -1} years old`);
// }
// calcAge(2015,1989);
//Exc 3
// const isEven = function(num){
//     return (num % 2  == 0);
// }
// console.log(`${isEven(2)} and ${isEven(9)}`);

//Exc 4
// const arr = [2, 5,4,9,11,13,17,91,20,22,54];

// const printOdd = function(numbers){
//     for(num of numbers){
//         if(!isEven(num)){
//             console.log(num);
//         }
//     }
// }
// printOdd(arr);

//Exc 5

// const exsitInArr = function(arr , num) {
//     for(item of arr){
//         if(item == num){
//             return true; 
//         }
//     }
//     return false;
// }
// console.log(exsitInArr([1,23,4,56,7,8,9,7,5], 23));
// console.log(exsitInArr([1,23,4,56,7,8,9,7,5], 44));

//Exc 6

// const calculator = {
//     add: function(num1,num2){
//         return num1 + num2;
//     }, 
//     subtract: function(num1,num2){
//         return num1 - num2;
//     }  
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) 

//Exc 7
// const increaseByNameLength = function(money , name){
//     return money *= name.length;
// }

// const makeRegal = function (name) {
//     return `His Royal Highness, ${name}`
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"





    
