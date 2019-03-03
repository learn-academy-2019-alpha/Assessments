//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

const reversed =(array) => {

return array.reverse()
}



console.log(reversed(originalArray));

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

var {type, gear, wheels} = bicycle

// Log the type of bicycle:
console.log(type)

// Log the bell:
console.log(gear[2])

// Log the PSI:
console.log(wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"


var letterCounter = array => {
var newString = ourString.toLowerCase().split('')

var finalArray =[]

for(var i=0; i<newString.length; i++){

if(newString[i] === "l"){
	 finalArray.push(newString[i])
}

}
 return finalArray.length
}

console.log(letterCounter(ourString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var getFib = (number) => {

	var num = [1, 1];

	for (var i = 2; i < number; i++) {
		num[i] = num[i-1]+ num[i-2];
	}

	return num[number-1];
}


console.log(getFib(10));






//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

var oddChecker = (array) => {
    var newArray = []

 for(var i=0; i<array.length; i++){

if(array[i] % 2 !== 0 && typeof array[i] !== 'string' && typeof array[i] !== 'boolean'){
	 newArray.push(array[i])
}


 }
 return newArray
}

console.log(oddChecker(fullArr));
