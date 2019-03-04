//-----------JavaScript Practical Assessment Week 2

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]
reverse = (array) =>{
return array.reverse()
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

letterCounter = (str) => {
	arr1 = str.split('')
	// .filter(v => v === 'l')
	filtered = arr1.filter(v => v ==='l'|| v === 'L')
	count = filtered.length
	return count
}
console.log(letterCounter(ourString));


// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array.
getfibarr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
//loop through and return index 0-9
getFib = (arr) =>{
	fibarr = getfibarr.filter((v, index) => index <= 9)
	return fibarr;
}
console.log(getFib(getfibarr));


//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers.
// Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddChecker(arr){

	newArr1 = arr.filter(v => typeof v === 'number')
	finalArr = []
	for( let i = 0; i < newArr1.length; i++){
		if( newArr1[i] % 2 !== 0){
				 finalArr.push(newArr1[i])
		}
	}
	return finalArr
}
console.log(oddChecker(fullArr));

const oddsonly = (arr) => {
	oddArr = arr.filter( v => typeof v === 'number' && v % 2 !== 0)

	return oddArr

}
console.log(oddsonly(fullArr));
