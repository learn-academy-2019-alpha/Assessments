//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is
// evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the
// number and "is not divisble by three".

const anonymousFunc = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by three`
  }
}
console.log(anonymousFunc(3));
console.log(anonymousFunc(5));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties
// of you. Write a function that returns a description of you.

let helloMe = {
  first_name: "Tucker",
  last_name: "Mullen",
  eye_color: "brown",
  hair_color: "dark brown"
}
const me = () => {
  return `My name is ${helloMe.first_name} ${helloMe.last_name}. I have ${helloMe.eye_color} eyes and ${helloMe.hair_color} hair.`
}
console.log(me());

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and
// last item as a string.

let groceryItems = ["cheese", "steak", "milk", "eggs", "chips"]

const specificFoods = (arr) => {
  let first = arr[0]
  let middle = arr[Math.floor((arr.length - 1) / 2)]
  let last = arr.slice(-1).toString();
  return `${first}, ${middle}, ${last}`
}
console.log(specificFoods(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string
// with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation
// symbols will not be included in the parameter.

const alphabetSoup = (str) => {
  let arr = str.toLowerCase().split("")
  let newArr = arr.sort().join('')
  return newArr
}
console.log(alphabetSoup("Tucker"));
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one
// value from each array concatenated together.

const animalNums = () => {
  var nums = [9, 5, 88, 2, 5, 42, 57]
  var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
  var howManyAnimals = ""
    for(let i = 0; i < nums.length; i++) {
      howManyAnimals += nums[i] + " " + nouns[i] + " "
    }
    return howManyAnimals
}
console.log(animalNums());

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new
// array of the numbers multiplied by 5.

let fiveNum = [1, 4, 7, 24, 13]
const multByFive = (arr) => {
  return arr.map(value => value * 5)
}
console.log(multByFive(fiveNum));
