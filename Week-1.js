//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const divisible = (num1) => {
    if(num1 % 3 === 0){
        return num1 + " is divisible by 3"
    }else{
        return num1 + " is not divisible by 3"
    }
}

console.log(divisible(6));
console.log(divisible(7));


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

let helloMe = {
    first_name: "Natalie",
    last_name: "Reinicke",
    height: "5 feet 6 inches",
    age: 21,
}
 const description = () => {
     return `My name is ${helloMe.first_name} ${helloMe.last_name}. I am ${helloMe.age} and I am ${helloMe.height} tall.`
 }
console.log(description());

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

const grocery = ["apple", "shampoo", "noodles", "soup", "chicken"]
const itemsSorter = (items) => {
let first = items[0]
let middle = items[Math.floor((items.length - 1)/ 2)]
let last = items[items.length - 1]
return `${first}, ${middle}, ${last}`
}
console.log(itemsSorter(grocery));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.


const alphabetSoup = (str) => {
    let newStr = str.toLowerCase().split("")
    return newStr.sort().join("")
}
console.log(alphabetSoup("Natalie"));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.




const animalNums = () => {
    var nums = [9, 5, 88, 2, 5, 42, 57]
    var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
    let newStr = ""
    for(i=0; i <nums.length; i ++){
    newStr += nums[i] + " " +nouns[i] + " "
	if(i!== nums.length -1){
		newStr += ", "
        }
        return newStr.splice()
    }

console.log(animalNums());

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

let arr = [3, 8, 4, 9, 1]

const multiply = (array) => {
    return array.map(value => value * 5)
}
console.log(multiply(arr));
