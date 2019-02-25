//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and
//decides if that number is evenly divisble by three or not. If it is, print
//the number and "is divisible by three" or, print the number
//and "is not divisble by three".

// function divisibleBy(num1){
//   if(num1 % 3 === 0){
//     return num1 + " is divisible by three"
//   } else {
//     return num1 + " is not divisible by three"
//   }
// }
//
// console.log(divisibleBy(5))
// console.log(divisibleBy(6))


// 2. Write an object called helloMe. Include your first_name, last_name and
//at least two other properties of you. Write a function that returns a
//description of you.

// var helloMe = {
//   firstName: "Robert",
//   lastName: "Jenkins",
//   shoeSize: 11,
//   phoneNumber: 6199050564,
// }
//
// function robert(){
//   return helloMe
// }
//
// console.log(robert())

// 3. Create an array of 5 grocery items. Write a function that returns the
//first, middle, and last item as a string.

// var groceryItems = ["lettuce", "tomato", "onion", "avocado", "buns"]
//
// var odds =[]
//
// const oddItemsOnly = (array) => {
//   for(let i=0; i < array.length; i++){
//     if(i % 2 === 0){
//       odds.push(array[i])
//     }
//   } return odds.toString()
// }
// console.log(oddItemsOnly(groceryItems))

//refactoring

// const shoppingBag = (array) => {
//   let cart = array.filter((value, index) => {
//     return index % 2 === 0
//   })
//   return cart.join(" ")
// }
// console.log(shoppingBag(groceryItems));


// 4. Write a function called alphabetSoup that takes an argument of "str" and
//return a string with the letters in alphabetical order (ie. learn becomes aelnr).
// Assume numbers and punctuation symbols will not be included in the parameter.

// const alphabetSoup = (str) => {
//   return str.split("").sort().join("")
// }
// console.log(alphabetSoup("learn"));
//



// 5. Given the arrays below, write a function animalNums that uses a for
//loop to print one value from each array concatenated together.

// var nums = [9, 5, 88, 2, 5, 42, 57]
//
// var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// const animalNums = (array) => {
//   // new variable to store nums and nouns return
//   let numNouns = []
//   //use a for loop
//   for(let i=0; i < array.length; i++){
//     numNouns += nums[i] + " " + nouns[i] + " "
//   } return numNouns
// }
//
// console.log(animalNums(nums))

// attempted refactoring
// const animalNums2 = (array1, array2) => {
//
//   let joined = array1.map((value,index) => value + array2[index])
//   return joined.join(" ")
// }
//
//
// console.log(animalNums2(nums, nouns));
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through
//the array and returns a new array of the numbers multiplied by 5.

// var myNums = [1, 2, 3, 4, 5]
//
// const mult5 = (array) => {
//   let newArr = array.map(value => value * 5)
//   return newArr
// }
//
// console.log(mult5(myNums))
