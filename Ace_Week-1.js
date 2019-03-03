//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const divByThree = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisble by three`
  } else {
    return `${num} is not divisble by three`
  }
}
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
let helloMe = {first_name:"Ace", last_name:"Visai", eye_color:"Brown", hair_color:"Black"}

const aboutMe = (obj) => {
  return obj
}
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
let groceryList = ["Milk", "Eggs", "Cereal", "Bread", "Soda"]

const stringMaker = (arr) => {
  let groceryArr = arr.filter((value, index) => {
    return index % 2 === 0
  })
  return groceryArr.join(" ")
}
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
  return str.toLowerCase().split("").sort().join("")
}
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const animalNums = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i ++) {
    console.log(`${arr1[i]} ${arr2[i]}`);
  }
}
animalNums(nums,nouns)
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
let myNums = [0,2,8,32,128]

const mult5 = (arr) => {
  let multplier = arr.map(value => value * 5)
  return multplier
}
