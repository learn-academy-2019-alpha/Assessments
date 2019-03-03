//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three"

var divisbleByThree = (num) => {
  if (num % 3 === 0) {
    return `${num} is divisble by 3`
  } else {
    return `${num} is not divisible by 3`
  }
}


console.log(divisbleByThree(5));


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.


var helloME = {
  first_name: 'Elshaday',
  last_name: 'Teshome',
  favourite_color: 'blue',
  favourite_sport: 'soccer',

}

var description = object => {
  return helloME
}

console.log(description())


// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.


var grocery = ['fruits', 'spices', 'vegetables', 'beverage', 'snack']

var groceryList = arrays => {

  var lastItem = grocery.length - 1

  var middleItem = Math.round(lastItem / 2)

  var value = `${grocery[0]} ${grocery[middleItem]} ${grocery[lastItem]}`

  return value

}

console.log(groceryList());



// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

var string = 'Elshaday'.toLowerCase()

var string1 = string.split('')

var alphabetSoup = string => {
  var array = string1.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
  return array
}

console.log(alphabetSoup());


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.


var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]


// output should be: "9 ducks", etc

const animalNums = (num1, num2) => {
      for ( i = 0; i < num1.length; i++) {
        console.log(`${num1[i]} ${num2[i]}`);
      }
    }
    animalNums(nums, nouns);

    
  //6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

    var num = [1, 2, 3, 4, ]

    var num2 = num.map(num => {
      return num * 5
    })

    console.log(num2);
