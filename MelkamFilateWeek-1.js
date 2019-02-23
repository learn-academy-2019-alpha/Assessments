//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

  const num = 13;

  const divisbleBy = (number) => {
   if (number % 3 === 0) {
     return `${number} is divisble by 3`;
   } else {
     return `${number} is not divisble by 3`;
   }
 };

 console.log(divisbleBy(num));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

const helloMe = {
  first_name: 'Melkam',
  last_name: 'Filate',
  age: 25,
  hobbies: 'dancing',
  description: function () {
    return `${this.first_name} ${this.last_name} ${this.age} ${this.hobbies}`
  }
}

console.log(helloMe.description());
//console.log(helloMe);


// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.


 var myArray = ['apple', 'milk', 'shrimp', 'banana'];

function firstAndLast(array) {

var firstItem = myArray[0];
var middleItem = myArray[Math.floor(myArray.length/2)]
var lastItem = myArray[myArray.length-1];

var objOutput = {
   first : firstItem,
   middle: middleItem,
   last : lastItem
  };

return objOutput;
}

var display = firstAndLast(myArray);

console.log(display);

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

const letter = 'soup';

const alphabetSoup = (str) => {
  return str.split('').sort().join('');
};
console.log(alphabetSoup(letter));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

const animalNums = (arr1, arr2) => {
  for( i = 0; i < arr1.length; i++) {
    console.log(`${arr1[i]} ${arr2[i]}`)
    }
  }
animalNums(nums,nouns)


//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

const multiplyByFive = [1, 2, 3, 5, 6]

var newArr = multiplyByFive.map(value => value * 5)

console.log(newArr);
