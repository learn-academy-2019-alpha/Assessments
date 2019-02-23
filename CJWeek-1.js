// -----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble
// by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const divide=(num1) =>{
  if (num1 % 3 !==1){
    return num1 + ' is divisible by three'
  }else{
    return num1 + ' is not divisible by three'
  }
}

console.log(divide(6));
console.log(divide(5));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you.
// Write a function that returns a description of you.

let helloMe = {
  name: 'Carrie Johnson',
  hair: 'brown',
  eyes: 'brown'

}
function me(){
  return `My name is ${helloMe.name} and I have ${helloMe.hair} hair and I have ${helloMe.eyes} eyes.`
}
console.log(me())
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

const groceryList = ["apples", "bananas", "grapes", "pear", "kiwi"]
let newList=[]
function listSorter = (food) => {
let first = food[0]
let middle = food[Math.floor((food.length -1)/2)]
let last = food[food.length -1]
return `${first}, ${middle}, ${last}`
}

console.log(listSorter(groceryList));
//
// // 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical
// //order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

const alphabetSoup = (str) => {
  let newStr = str.split("")
  return newStr.sort().join("")
}
console.log(alphabetSoup('bear'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each
//array concatenated together.


const animalNums = () => {
  var nums = [9, 5, 88, 2, 5, 42, 57]
  var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
  var newStr = ""
  for(let i=0; i <nums.length; i ++){
    newStr+= nums[i] + " " + nouns[i] + ","
  }
  return newStr
}
console.log(animalNums());


// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers
//multiplied by 5.

let arr1 = [1, 2, 3, 4, 5]

const mult5 = (array) => {
  let newArr = []
  for(let i = 0; i<array.length; i++){
    newArr.push(array[i]*5)
}
return newArr
}

console.log(mult5(arr1));

//OR

let arr1 = [1, 2, 3, 4, 5]

const mult5 = (array) =>{
  return array.map(i => i * 5)
}
console.log(mult5(arr1));  
