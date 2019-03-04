//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const divisbleByThree = (number) => {
  if (number%3 === 0) {
    return `${number} is evenly divisible by 3`
  } else {
    return `${number} is not evenly divisibly by 3`
  }
}
console.log(divisbleByThree(1));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

var helloMe = {
  first_name: "Timothy",
  last_name: "Tang",
  height: "6",
  favorite_color: "red"
}

const aboutMe = (object) => {
  return object
}
console.log(aboutMe(helloMe));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

let groceryItems = ["chicken", "orange juice", "rice", "21 seasoning", "brusselsprouts"]

const groceryBag = (array) => {
  let shoppingBag = array.filter((value, index) => {
    return index % 2 === 0
  })
  return shoppingBag.join(" ")
}

console.log(groceryBag(groceryItems));

//OMG IF U HAVE TWO ARGUEMENTS U HAVE TO USE PARATHENSES FOR FILTER MTHOD

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
//use sort

const alphabetSoup = (string) => {
  return string.toLowerCase().split("").sort().join("")
}
console.log(alphabetSoup("googleEyesfAcebOoKreddit"));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc


const addingTogether = (array1, array2) => {
  let numsNouns = ""
  for (let i=0; i < array1.length; i++) {
    numsNouns += array1[i] + "" + array2[i] + " "
  }
  return numsNouns
}
console.log(addingTogether(nums,nouns));

const animalNums = (array1, array2) => {
  let pleaseWork = array1.map((value, index) => value + array2[index])
  return pleaseWork.join(" ")
}

console.log(animalNums(nums, nouns));




//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

//use map
const numberArray = [1, 5, 6, 7, 8]
const multi5 = (array) => {
  let newNumberArr = array.map(value => value*5)
    return newNumberArr
}
console.log(multi5(numberArray));
