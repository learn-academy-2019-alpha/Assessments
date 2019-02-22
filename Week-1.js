//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
// var evenlyDivisible = (num) => {
//   if (num % 3 === 0){
//     return `${num} is evenly divisible by three`
//   }else {
//     return `${num} is not divisible by three`
//   }
// }
//
// console.log(evenlyDivisible(12));
// console.log(evenlyDivisible(31));
//
// // 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
// var hellowMe= {
//   first_name: "Kara",
//   last_name: "Webb",
//   eye_color: "Hazel",
//   hair_color: "Dirty Blonde",
//   getData: function () {return this.first_name + " " + this.last_name + " " + this.eye_color + " Eyes " + this.hair_color + " Hair."}
// }
//
// console.log(hellowMe.getData());

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryArray= ["milk", "bread", "cheese", "apples", "lettuce"]
var oddGrocery= []
var groceryItems= (item) => {
    for (let i=0; i<item.length; i++){
      if(i % 2 === 0){
        oddGrocery.push(item[i])
      }
    } return oddGrocery.toString()
}
console.log(groceryItems(groceryArray));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
  return str.toLowerCase().split('').sort().join('')
}
console.log(alphabetSoup('karawebb'));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
