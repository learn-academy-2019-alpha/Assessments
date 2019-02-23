//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly
// divisble by three or not. If it is, print the number and "is divisible by three" or,
//print the number and "is not divisble by three".
//  let divisibleByThree = (num) => {
//    if(num%3===0){
//    return `${num}is divisible by 3`
//  }else{
//    return `${num} is not divisible by 3`
//  }
// }
// console.log(divisibleByThree(8));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you.
//Write a function that returns a description of you.



// const helloMe = {
//   firstName: 'Muzit',
//   lastName: 'Sebhat',
//   age: 26,
//   hair: 'Brown',
//   personInfo() {
//     return `${this.firstName} ${this.lastName} is ${this.age} years old and has ${this.hair} hair.`
//   }
// };
//
// console.log(helloMe.personInfo());


// Write your code below




// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
// var groceryItems=["tomato", "potato", "onions", "pepper", "eggs", "hi"]
// function firstAndLast(array) {
//
// var firstItem = groceryItems[0];
// var lastItem = groceryItems[groceryItems.length-1];
// var middleItem = groceryItems[(Math.floor(groceryItems.length)/ 2)];
//
//  var objOutput = {
//    first : firstItem,
//    last : lastItem,
//    middle : middleItem
//   };
//
// return objOutput;
// }
//
// var display = firstAndLast(groceryItems);
//
// console.log(display)



// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters
// in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

// let alphabetSoup = (str) => {
//   var arr = str.split('')
//   alpha = arr.sort()
//   return alpha.join('')
// }
//
// console.log(alphabetSoup('lear'));


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array
//concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const animalNums = (num1, noun1) => {
  for (let i = 0; i < num1.length; i++){

console.log(num1[i] + " " + noun1[i])
  }
}

animalNums(nums, nouns);

//
//
//
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

// var arr5 = [1, 2, 3, 4, 5]
// const newArr = arr5.map(value => value * 5)
//
// console.log(newArr);
