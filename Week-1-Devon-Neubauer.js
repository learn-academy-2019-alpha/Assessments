//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".


var divisable = (num) => {
  if (num % 3 === 0) {
    return `The numbeer ${num} is divisible by three.`
  } else {
    return `The number ${num} is not divisble by three.`
  }
}

console.log(divisable(12))
console.log(divisable(4))
console.log(divisable(36))


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.


var helloMe = {
  firstName : "Devon",
  lastName : "Neubauer",
  hair : "brown",
  eyes : "brown",

  getData: function () {return "My name is " + this.firstName + " " + this.lastName + " and I have " + this.hair + " hair and " + this.eyes + " eyes."}
}

console.log(helloMe.getData())


// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

// var groceryArray = ["milk", "bread", "eggs", "cheese", "coffee"]


var groceryArray = ["milk", "bread", "eggs", "cheese", "coffee"]

var odds = ""

var oddItems = (grocery) => {
    for (let i = 0; i < grocery.length; i++) {
        if (i % 2 === 0) {
            odds += grocery[i] + ", "
        }
    } return odds.toString()

  }

console.log(oddItems(groceryArray))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

function alphabet_order(str)
  {
return str.split('').sort().join('')
  }
console.log(alphabet_order("learn"))


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

var combinedOrder = ""

// output should be: "9 ducks", etc

const combinedItem = (number, animal) => {
  for (let i = 0; i < number.length; i++) {
    combinedOrder += number[i] + " " + animal[i] + " "
  }  return combinedOrder
}

console.log(combinedItem(nums, nouns))


//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.


var numbers = [1, 2, 3, 4, 5]
var numbersTimesFive = numbers.map(function(i) {
   return i * 5;
});

console.log(numbersTimesFive)
