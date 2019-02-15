// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
function letter(word, index) {
  return word.charAt(index);
}

// 2. Write the code that determines if there is a 'x' in mantra.
function question(word, letter) {
  return word.includes(letter);
}
// 3. Write the code that determines if there is a 'v' in mantra.
function question(word, letter) {
  return word.includes(letter);
}
// Stretch: Write the code that returns the position of 'v' in mantra.
function question(word, letter) {
  if (word.includes(letter) === true) {
    return word.indexOf(letter)
  } else {
    return word + ' does not include ' + letter
  }
}

// Consider the following statement:

var codingIsEasy = true;
var imBored = true;

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false;

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev";
function logLetters(word) {
  for (let i = 0; i < word.length; i++) {
     console.log(word[i]);
  }
}
// Stretch: Using a while loop.
function logLetters(word) {
  let i = 0;
  while (i < word.length) {
    console.log(word[i]);
    i++;
  }
}

let i = 0;
while (i < mantra.length) {
  console.log(mantra[i]);
  i++;
}

// Super Stretch: Using forEach().
var mantra = "Be the dev";
[...mantra].forEach(function(element) {
  console.log(element);
})
// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
//write a function
//argument
//conditional typeof
// conditional filter out vowels (loop to find each element??)
// return consonant

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
var message = "thisisateststring"

function noVowelsAllowed(input) {
  let noVowelString = ""
  if (typeof input !== 'string') {
    return 'This will only work if you input a string. Try again por favor:)'
  } else {
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
        noVowelString = noVowelString + input[i]
      }
    }
  }
   return noVowelString
}

//OR

function noVowelsAllowed(input) {
  let noVowel = [];
  if (typeof input !== 'string') {
      return 'This will only work if you input a string. Try again por favor:)'
  } else {
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
         noVowel.push(input[i])
       }
    }
 return noVowel.join("")
  }
}

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
//write a function
//array as argument
//create blank array
//loop
//push to new array array[i].animal === 'cat'
// return new array
var toonimals = [
  {name: 'Itchy', animal: 'mouse'},
  {name: 'Stimpy', animal: 'cat'},
  {name: 'Daffy', animal: 'duck'},
  {name: 'Scratchy', animal: 'cat'},
  {name: 'Ren', animal: 'dog'},
  {name: 'Felix', animal: 'cat'}
]
function animals(array) {
  let cats = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].animal === 'cat') {
      cats.push(array[i])
    }
  }
  return cats
}
