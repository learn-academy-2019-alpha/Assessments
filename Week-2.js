//-----------JavaScript Practical Assessment Week 2
//
//  1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.
//
var originalArray = [1, 2, 3, 4, 5, 6, 7]

const numReverse = (array) => {
array.reverse();
return array
 }
console.log(numReverse(originalArray));



// // 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563"s, "80-115 PSI"],
		brand: "Trek"
	}
}

Log the type of bicycle:
console.log(bicycle)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])
//
//
// // 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
//
var ourString = "Hello Learn Students!"
const letterCounter = () => {
return ourString.split(/l/gi).length - 1
}
console.log(letterCounter());
//
//
// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array.
 // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fib = () => {
    const res = [1, 1]

 while(res.length < 10){
   let lastNum = res[res.length - 1];
   let secondLastNum = res[res.length - 2];
   let sumOfLastTwo = lastNum + secondLastNum;
   res.push(sumOfLastTwo);
 }
    return res;
}

console.log(fib())

// geFib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// const getFib = fib.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
//
// console.log(getFib);


// // //5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
var newArr = []
const oddChecker = () => {
const result = [];
 for(let i=0; i < fullArr.length; i++) {
   //if its even
   if(typeof fullArr[i] === 'string'){
       // dont return
   } else if(typeof fullArr[i] === 'boolean'){
     //dont return
   } else if(fullArr[i]%2 === 0){
     //dont return
   } else {
     result.push(fullArr[i])
   }
 }
 return result;
}
console.log(oddChecker())

//ES6 syntax, I cant seem to get the strings out
var oddChecker = () => {
 return fullArr.filter(number => number% 2 !==0 && number !== 'string')
 }
console.log(oddChecker());
