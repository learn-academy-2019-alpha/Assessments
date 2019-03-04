//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
const reverse = (array) => {
	array.reverse()
	return array
}
console.log(reverse(originalArray));
// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

const letterCounter = (string) => {
let newArr = []
let newWord = string.toLowerCase().split('')
for(let i = 0; i <newWord.length; i++) {
	if (newWord[i] === "l") {
	newArr.push(newWord[i])
   }
  }
return newArr.length
}

console.log(letterCounter(ourString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (numMax) => {
let fib = []
for (let i = 2; fib.length <= 10; i++) {
	fib[0] = 0
	fib[1] = 1
	if (fib[i] = fib[i-2] + fib[i-1])
	fib.push(fib[i])
	}
	return fib
}
console.log(getFib(10));

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const oddChecker = (array) => {
	let newArr = []
	for (let i =0; i < array.length; i++) {
		if (array[i] %2 !== 0 && typeof array[i] !== "boolean" && typeof array[i] !== "string")
			newArr.push(array[i])
		}
	return newArr
}

console.log(oddChecker(fullArr));
