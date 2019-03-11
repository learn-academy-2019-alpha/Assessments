//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
// // var newArr = originalArray.reverse()
// //
// // console.log(newArr);
// // console.log(originalArray);
// //
let newArr = (array) => {
	return array.reverse()
}
console.log(newArr(originalArray))
console.log(originalArray);
// 2. Given the object below, complete the console.log to find specific information:
//
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

let letterCounter= (str) => {
	var letterCounter = 0
	for(let i = 0; i < str.length; i++) {
		if(str[i] === "L" || str[i] === "l"){
			letterCounter++
		}
	}	return "Letter Appears: " + letterCounter + " times"
}
console.log(letterCounter(ourString));

// could I have used map or fliter to simplify it?

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array.
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//
const getFib = num => {
	if (num === 1) {
		return [0, 1]
	} else {
		let array = getFib(num - 1)
		array.push(array[array.length - 1] = array[array.length -2])
		return array
	}
}
console.log(getFib(9));
// (looked this up not sure what i am trying to do?)
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.
//expected return: 9, 7, 199, -9, "7"
var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddChecker(array){
	let oddArray= []
	for(let i= 0; i < array.length; i++){
		if(typeof array[i] === "number" && array[i] % 2 !== 0){
			oddArray.push(array[i])
		}
	} return oddArray
}
console.log(oddChecker(fullArr));
console.log(fullArr);

//didnt get the seven back in the string am I supposed to ?

// var oddChecker = array => {
//
// }
