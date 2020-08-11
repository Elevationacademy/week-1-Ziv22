// lesson examples

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// for (let compayIndex of companies) {
//     console.log(compayIndex);
// }

//Exc1 
// const age = [22,23,24];
// const names = ["John", "Jerry", "Beth"];

// for(i in age){
//     console.log(`${names[i]} is ${age[i]}`);
// }

//Exc2 

// const numbers = [1,2,3];
// let sum =0; 
// for(number of numbers){
//     sum += number; 
// }
// console.log(sum);

//Exc3 
// console.log(sum/numbers.length);

// Exc4
// const nums = []; 
// for (let i = 1; i < 101; i++) {
//     nums.push(i);
// }

//Exc5 
// let oddNums = []; 
// for(num of nums){
//     (num % 2 != 0) ? console.log(num) : "";
// }

//Exc6 

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11];
// #1 option 
// console.log(nums.indexOf(709));
// #2 option 
// for (const num in nums) {
//     (nums[num] == 709) ? console.log(num) : "";
// }

//Exc 7 

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(index in names){    
//     people.push({name:names[index],age:ages[index]});
// }

//Exc 8 
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(index in names){    
//     people.push({name:names[index],age:ages[index]});
// }

// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`);
// }

//Exc 9
// const posts = [
//     {id: 5, text: "Love this product"},
//     {id: 10, text: "This is the worst. DON'T BUY!"},
//     {id: 14, text: "So glad I found this. Bought four already!"}
//   ]

//   for(post in posts){
//       if(posts[post].id == 10){
//           posts.splice(post,1);
//       }
//   }
//   console.log(posts);

//Exc10
// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]
// let comment;
// let commentsArray = [];

//   for(postIndex in posts){
//       if(posts[postIndex].id == 2){
//           ommentsArray = posts[postIndex].comments;
//           for(commentIndex in ommentsArray){
//               comment = posts[postIndex].comments[commentIndex]
//               if(comment.id == 3){
//                   ommentsArray.splice(commentIndex,1);
//               };;
//           };
//       };
//   };

// Extension
