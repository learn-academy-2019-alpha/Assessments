//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
//arrow function
//array as argument
//.reverse?

let reversed = (array) => {
	return array.reverse()
}
//console.log(reversed(originalArray));

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
//console.log(bicycle.type)

// Log the bell:
//console.log(bicycle.gear[2])

// Log the PSI:
//console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
//function letterCounter
//arg is str
//str to array + filter?
//or create counter and count when letter appears
//NOPE.
// const letterCounter = (str, letter) => {
// 	let newStr = str.toLowerCase().split(' ')
// 	let counter = 0;
// 	for (let i = 0; i <= newStr.length; i++) {
// 		if (letter === 'l') {
// 		  counter++
// 		}
// 	}
// 	return counter
// }
// console.log(letterCounter(ourString, 'l'));

const letterCounter = str => {
	let newStr = str.toLowerCase().split('')
	const newStrFilt = newStr.filter(char=> char === 'l')
	return newStrFilt.length
}
//console.log(letterCounter(ourString));
// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//func getFib
//return array of 10
// i cheated here. google all the way. wasn't sure how to do this. this works but input should be 9 to return array with length of 10
const getFib = num => {
  if (num === 1) {
    return [0, 1];
  } else {
    let array = getFib(num - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
};

 //console.log(getFib(9));

 //now with greater understanding from google, trying again:
//set up array [0, 1] and add final 2 values to get new value
//for loop? fibArr.length = 10?? ...had to use 7 because initial 2 values were already declared in fibArr and final value doesnt need new loop through
 const getFibb = () => {
	 let fibArr = [0, 1]
	 for (let i = 0; i <=7; i++){
	 	fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
   }
	  return fibArr
 }
// console.log(getFibb());


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//func oddChecker
//create empty array
//array as argument
//for loop
// if odd, return
//refactor to es6
const oddChecker = array => {
	let oddArr = []
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number') {
			oddArr.push(array[i])
		}
		// if (array[i] % 2 !== 0) {
		// 	oddArr.push(array[i])
		// }
	}
	return oddArrFilt = oddArr.filter(val => val % 2 !== 0)
}

// console.log(oddChecker(fullArr));
