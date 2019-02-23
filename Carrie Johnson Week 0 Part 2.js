Carrie Johnson

Consider this variable:

var mantra = "Be the dev";

1. Write the code that returns 'B' from mantra.
console.log(mantra.charAt(0))
// 2. Write the code that determines if there is a 'x' in mantra.
if(mantra.includes("x")){
  console.log("Yes, there is an x")
} else {
  console.log("There is no x")
}
// 3. Write the code that determines if there is a 'v' in mantra.
if(mantra.includes("v")){
  console.log("Yes, there is an v")
} else {
  console.log("There is no v")
}
// Stretch: Write the code that returns the position of 'v' in mantra.
var find = mantra.indexOf('v')
return console.log(find);

Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev";

for (let i=0; i<mantra.length; i++){
  console.log(mantra[i])
}
Stretch: Using a while loop.
var mantra = "Be the dev";

let i=0
while(i < mantra.length){
  console.log(mantra[i]);
  i++;
}


Super Stretch: Using forEach().
var mantra = "Be the dev"

array1.forEach(function(element)){
  console.log(element);
}

Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
// function vowelsx(array){
//   var newArr = ""
//   for(let i=0;i < array.length; i++){
//     if(array[i] !== "a" && array[i] !== "e" && array[i]!== "i" && array[i]!== "o" && array[i]!== "u"){
//       newArr = newArr + array[i]
//     }
//     }
// return newArr
//   }
// console.log(vowelsx(message))



// Stretch: Update your function to throw an exception if the argument is not a string.
function vowelsx(arr){
  var newArr = ""
  if(typeof arr !== "string"){
  return "Not a string!"
}else{
  for(let i=0;i < arr.length; i++){
  if (arr[i] !== "a" && arr[i] !== "e" && arr[i]!== "i" && arr[i]!== "o" && arr[i]!== "u"){
      newArr = newArr + arr[i]
}

    }
  }
    return newArr
}

console.log(vowelsx(message))

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
function vowelsx(arr){
  var newArr = ""
  if(typeof arr !== "string"){
  return "TypeError"
}else{
  for(let i=0;i < arr.length; i++){
  if (arr[i] !== "a" && arr[i] !== "e" && arr[i]!== "i" && arr[i]!== "o" && arr[i]!== "u"){
      newArr = newArr + arr[i]
}

    }
  }
    return newArr
}

console.log(vowelsx(message))

Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
function animals(array){
  var newArr = []
  for(i=0; i <array.length;i++){
    if(array[i].animal === 'cat'){
      newArr.push(array[i])
    }
    return newArr
  }
}
console.log(animals(toonimals));
