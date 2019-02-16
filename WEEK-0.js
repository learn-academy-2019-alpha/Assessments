// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

console.log(mantra[0]);


// 2. Write the code that determines if there is a 'x' in mantra.
console.log(mantra.includes("x"));

// 3. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes("v"));
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf("v"));
// Consider the following statement:

var codingIsEasy
var imBored

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:
//
var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for(let i=0; i < mantra.length; i++){
console.log(mantra[i])
}

// Stretch: Using a while loop.
var i = 0;
while(i < mantra.length){
    console.log(mantra[i]);
    i++;
}
// Super Stretch: Using forEach().
var mantra2 = []
for (let i = 0; i < mantra.length; i ++){
    mantra2.push(mantra[i]);
}
mantra2.forEach(function(element){
    console.log(element);
})
// Consider the following variable:

var message = "thisisateststring"
var message1 = 4

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

//first way//
function noVowelsAllowed() {
  console.log(message.replace(/[aeiou]/gi, ""));
}
noVowelsAllowed();

// second way//

var message = "thisisateststring";
var chars = message.split("");
var newChars = [];

function noVowels(str) {

	for (i=0; i < str.length; i++) {
		if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== "y") {
			newChars.push(str[i]);
		}
	}

	return newChars.join("");
}

console.log(noVowels(chars));

// Stretch: Update your function to throw an exception if the argument is not a string.
function noVowelsAllowed() {
    if(typeof message1 !== "string"){
        console.log("Error this is not a string");
    }
  console.log(message.replace(/[aeiou]/gi, ""));
}
noVowelsAllowed();
// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
function nostring(string){
    if(typeof string !== "string"){
    console.log(new TypeError("error"));
}else {
    return "This is a string"
}
}
console.log(nostring(newChars));
// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

function
