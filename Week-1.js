//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const divisible = (num1)=>{
  if(num1 % 3===0){
    return `${num1} is divisible`
  }else{
    return `${num1} is not divisble`
  }
}
console.log(divisible(3));
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe =
{first_name: 'Dante',
last_name: 'Moore',
skin_hue:'Brownish',
species:'Hooman'}

const returnMe = (object) =>{
  return object
}
console.log(returnMe(helloMe));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
// var arr = ['acai','mango','strawberry','juice', 'pear']
const groceryItems = ['acai', 'mango', 'veggies','potato','ice']

const newArr = (array) => {
    var firstItem = array[0];
    var lastItem = array[array.length-1];
    var middleItem = array[Math.floor(array.length / 2)]

     var objOutput = {
       first : firstItem,
       middle: middleItem,
       last : lastItem,
      };

    return objOutput;
}

console.log(newArr(groceryItems));
const returnFood = (arr) =>{
 newArr = arr.filter()
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const abcOrder =(str) =>{
  return str.toLowerCase().split('').sort().join('')
}
console.log(abcOrder('Happy'));
// // 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
//
var nums = [9, 5, 88, 2, 5, 42, 57]
//
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
//
const animalNums =(arr1,arr2) =>{
  for(let i = 0; i < arr1.length;i++){
  console.log(`${arr1[i]} ${arr2[i]}`);
}
}
animalNums(nums,nouns)
// // // output should be: "9 ducks", etc
//
// //6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var arr = [12,20,30,19,1]
const multiply =(arr) =>{
  let multi = arr.map(value => value *5)
  return multi
}
console.log(multiply(arr));
