//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const divisbleBy = (num) => {
  if(num%3 === 0){
    return num + " is divisible by three"
  } else {
    return num + " is not evenly divisible by three"
  }
}

console.log(divisbleBy(5));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

// var jerrod = {
//   first_name: "Jerrod",
//   last_name: "Jordan",
//   hair_color: "Brown",
//   eye_color: "Blue",
// }
//
// const person = (object) => {
//   return object
// }
//
// console.log(person(jerrod));

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

// var groceryList = ["Fruit", "Milk", "Coffee", "Water", "Hot Pockets"]
//
// const groceryBag = (array) => {
//   let newArr = array.filter((value, index) => {
//     return index % 2 === 0
//   })
//   return newArr.join(" ")
//
// }
//
// console.log(groceryBag(groceryList));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

// const alphabetSoup = (str) => {
//   return str.toLowerCase().split("").sort().join(" ")
// }
// console.log(alphabetSoup("test"));
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

// var nums = [9, 5, 88, 2, 5, 42, 57]
//
// var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
//
// const animalNums = (num, noun) => {
//
// for(let i=0; i < num.length; i++){
//
// console.log(num[i] + " " + noun[i])
//   }
// }
//
// animalNums(nums, nouns)

// console.log(animalNums(nums, nouns));

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
//
// const numArray = [1, 3, 5, 8, 10]
//
// const multiplied5 = (array) => {
//   let newArray = array.map(value => value * 5)
//   return newArray
// }
//
// console.log(multiplied5(numArray));
