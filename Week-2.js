//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

var opposite = (array) =>{
	return array.reverse()
}
console.log(opposite(originalArray));

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
// 1st way
 letterCounter = (string) => {
	 let newString = string.toLowerCase().split('')
	 let finalString = []
	 for(let i = 0; i < newString.length; i++){
		 if (newString[i] === 'l' ){
			 finalString.push(newString[i])
		 }
	 }
	 return finalString.length
 }

// 2nd way

 letterCounter2 = (string) => {
	 let otherString = string.toLowerCase()
	 let counter = 0
	 for(let i = 0; i < otherString.length; i++){
		 if (otherString.charAt(i) === 'l'){
			 counter += 1
		 }
	 }
	 return counter
 }

// 3rd way
 const letterCounter3 = (str) => {
	 return str.toLowerCase().split('').filter(x => x === 'l').length
 }

 console.log(letterCounter(ourString));
 console.log(letterCounter2(ourString));
 console.log(letterCounter3(ourString));

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

var fib = () => {
    let a = 1, b = 0, c, output = []

    while (output.length < 10) {
        c = a 
        a = a + b
        b = c

        output.push(b)
    }

    return output
}

console.log(fib())
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]


var oddChecker = (array) => {
	let finalArr =[]
	for(let i = 0; i < array.length; i++){
		if(typeof array[i] !== 'number'){
		}else if(array[i] % 2 !== 0){
			finalArr.push(array[i])
		}
	}
	return finalArr
}

const checkOdd = (array) => {
	return array.filter(x => x % 2 !== 0 && typeof x === 'number')
}
console.log(oddChecker(fullArr));
console.log(checkOdd(fullArr));
