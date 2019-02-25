//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not.
// If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

const evenlyDivisible = (num) => {
  if(num % 3 ===0 ){
    return `${num} is evenly divisible by three.`
  } else {
    return `${num} is not divisble by three`
  }
}

console.log(evenlyDivisible(12));
console.log(evenlyDivisible(35));


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you.
// Write a function that returns a description of you.

var helloMe = {
  first_name : "Krithika",
  last_name : "Jagadeesan",
  ethinicity : "Asian-Indian",
  hair_color : "Black",
  eye_color:"Brown"
getData: function(){ return `My name is ${this.first_name} ${this.last_name}. I'm ethnically ${this.ethinicity}, and my hair is ${this.hair_color} and eyes are ${this.eye_color} .`  }
}

console.log(helloMe.getData());



// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceryArray= ['milk', 'bread','cheese', 'apples', 'chicken']
var oddGrocery =""
var groceryItems =(item) => {
  for( let i=0 ; i<item.length; i++){
      if(i % 2 ===0 ){
         oddGrocery += item[i] + ", "
      }
  } return oddGrocery

}

console.log(groceryItems(groceryArray));



// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

const alphabetSoup = (str) =>{
  return str.toLowerCase().split('').sort().join('')
}
console.log(alphabetSoup('Krithika'));



// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
var combinedarr=[]
const animalNums = (number, animal)=> {
    for(let i=0; i<number.length; i++){
        combinedarr+= ` ${number[i]} ${animal[i]} `
    }return  combinedarr
  }

console.log(animalNums(nums, nouns));

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numarr= [3,6,8,12,22]

  let newarr = numarr.map(function(item){
    return item * 5
  })

console.log(newarr);
