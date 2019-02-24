//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

// const divisbleBy3 = (num) =>{
//     if(num % 3 === 0){
//         return  num + " is divisble by 3"
//     } else {
//         return  num + ' is NOT divisble by 3'
//     }
// }
//  console.log(divisbleBy3(7));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
//
// const helloMe = {
//     first_name: 'Gabriel',
//     last_name: 'Torres',
//     eye_color: 'Brown',
//     age: 18
// }
//
// const personInfo = (person) => {
//     return person
// }
//
// console.log(personInfo(helloMe));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

// const groceryItems = ['eggs', 'chicken', 'rice', 'pasta', 'veggies']
//
// const fML = (array) => {
//     var firstItem = array[0];
//     var lastItem = array[array.length-1];
//     var middleItem = array[Math.floor(array.length / 2)]
//
//      var objOutput = {
//        first : firstItem,
//        middle: middleItem,
//        last : lastItem,
//       };
//
//     return objOutput;
// }

// console.log(fML(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.


// const randLetters = 'bcaedf'
//
// const alphabetSoup = (str) => {
//     return str.split('').sort().join('')
//
// }
//  console.log(alphabetSoup(randLetters));




// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]


// My original answer
//
//get an index of both arrays and concat them as a new index in a new array and loop
//push into new arry maybe?
// const animalNums = (arr1, arr2) => {
// var newArr = []
// for (let i = 0; i < arr1.length, i < arr2.length; i++ ){
//     var combo = arr1[i] + ' ' + arr2[i]
//     newArr.push(combo)
//     }
//     return newArr.join()
// }
// console.log(animalNums(nums,nouns));

//get an index of both arrays and concat them as a new index in a new array and loop
//push into new arry maybe?

//tried to clean my answer up based on Dantes answer, I made variables that
//didn't need to be made. I think I tend to over think stuff. I kept getting
//undefined at the end like its expecting something else
// const animalNums = (arr1, arr2) => {
// for (let i = 0; i < arr1.length, i < arr2.length; i++ ){
//     console.log(arr1[i] + ' ' + arr2[i]);
//     }
// }
// console.log(animalNums(nums,nouns));


//Dante's answer

// var nums = [9, 5, 88, 2, 5, 42, 57]
// //
// var nouns = ['ducks', 'elephants', 'pangolin', 'rhinoceros', 'giraffes', 'penguins', 'llamas']
// //
// const animalNums =(arr1,arr2) =>{
//  for(let i = 0; i < arr1.length;i++){
//  console.log(`${arr1[i]} ${arr2[i]}`);
// }
// }
// animalNums(nums,nouns)


// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numbers = [9, 3, 5, 7, 25]

const multBy5 = (array) => {
   for (let i = 0; i < array.length; i++){
      console.log(array[i] * 5)
   }
}
console.log(multBy5(numbers));
