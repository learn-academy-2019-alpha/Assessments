//-----------JavaScript Practical Assessment Week 1

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

let divisibleBy3 = (number) => {
    if(number % 3 === 0){
        return `${number} is divisible by 3`
    }
    else {
        return `${number} is not divisible by 3`
    }
}
console.log(divisibleBy3(12));
console.log(divisibleBy3(13));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

let helloMe = {
    first_name: "Maria",
    last_name: "Dougherty",
    age: 503,
    occupation: "wizard"
}
let description = (helloMe) => {
    let {first_name, last_name, age, occupation} = helloMe;
    return `Hi, my name is ${first_name} ${last_name}. I am ${age} years old and I am a ${occupation}.`;
}
console.log(description(helloMe));

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceries = ["apples", "bananas", "fruit loops", "captain crunch", "orange juice"];

let groceryString = (array) => {
    var newGroceries =[];
    newGroceries.push(groceries[0], groceries[2], groceries[groceries.length-1]);

    return newGroceries.join(", ");

}
console.log(groceryString(groceries));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

let alphabetSoup = (str) => {
    return str.split("").sort().join("");
}
console.log(alphabetSoup("learn"));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

let animalNums = (nums, nouns) => {
    var combined = [];
    for(let i = 0; i < nums.length; i++){
        combined.push(`${nums[i]} ${nouns[i]}`);
    }
    return combined;

}
console.log(animalNums(nums,nouns));

let mapAnimalNums = (nums, nouns) => {
    var combined = nums.map((value, index) => {
        return `${value} ${nouns[index]}`;
    })
    return combined;
}
console.log(mapAnimalNums(nums,nouns));
//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numArray = [5, 6, 7, 8, 9];

let multBy5 = (array) => {
    let newArray = array.map(value => value * 5);

    return newArray;
}
console.log(multBy5(numArray));
