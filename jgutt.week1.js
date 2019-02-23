//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
// STEP ONE
// const divisibleByThree = num => {
// 	if (num % 3 === 0) {
// 		return `${num} is divisible by three`
// 	}
// 	return `${num} is not divisible by three`
// }
// console.log(divisibleByThree(9));
//
// console.log(divisibleByThree(7));
const divisibleByThreeRefac = num => num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`;
// console.log(divisibleByThreeRefac(9));
// console.log(divisibleByThreeRefac(7));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
let helloMe = {
	first_name: 'Jess',
	last_name: 'Guttenberg',
	location: 'San Diego',
	favorite_color: 'rainbow'
}

const meFunc = input => {
	return `Hi my name is ${input.first_name} ${input.last_name}. I live in ${input.location}. My favorite color is the ${input.favorite_color}.`
}
//console.log(meFunc(helloMe));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
let groceryItems = ['doritos', 'pizza', 'chocolate', 'cookies', 'sandwich'];
//write function, takes in array as argument, use index and return 0 2 4
//loop and conditional statment for odd index values
const zeroTwoFour = array => {
	let work = array.filter((value, index) => {
		return index % 2 === 0
	})
	return work
}

//console.log(zeroTwoFour(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
//write function called alphabet alphabetSoup
//arg = str (no number or punc to worry about)
//str.split to make array?
//array - use sort?
//join back to make string?
//return str with letters in alphabetical order
const alphabetSoup = string => {
	let array = string.split('').sort().join('')
	return array
}

//console.log(alphabetSoup('jessguttenberg'));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
//function
//2 args - both arrays
//create blank array
//2 for loops
//push items to empty arrays
//return empty array that is no longer empty
//
// const merge = (arr1, arr2) => {
// 	let finalArr = [];
// 	for (let i = 0; i<arr1.length; i++) {
// 		finalArr.unshift(arr1[i])
// 	}
// 	for (let j = 0; j<arr2.length; j++) {
// 		finalArr.unshift(arr2[j])
// 	}
// 	return finalArr
// }

//maybe 1 loop and splice into first_name??
// const merge = (arr1, arr2) => {
// 	for (let i = 0; i<arr1.length; i++) {
// 		for (let j = 0; j<arr2.length; j++) {
// 			arr1 = arr1.splice(i, 0, arr2[j])
// 		}
// 	}
// 	return arr1;
// }

//this is close, but has the comma in between 9 + ducks etc.
// const merge = (arr1, arr2) => {
// 	let newArr = [];
// 	for (let i = 0; i<arr1.length; i++) {
// 		newArr.push(arr1[i], arr2[i])
// 	}
// 	return newArr;
// }
//this works but i don't like it. no return. clunky.
// const mergeAgain = (arr1, arr2) => {
// 	for (let i = 0; i<arr1.length; i++) {
// 		console.log(`${arr1[i]} ${arr2[i]}`)
// 	}
// }
var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const mergeAgain = (arr1, arr2) => {
	let newArr
	for (let i = 0; i<arr1.length; i++) {
		newArr = arr1.map((value, index) => {
			return `${arr1[index]} ${arr2[index]}`
		})
	}
	return newArr
}


console.log(mergeAgain(nums, nouns));
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
let initial = [2, 4, 6, 8, 10]
const mult5 = array => {
	let newArr = array.map(num => num * 5)
	return newArr;
}

// console.log(mult5(initial));
