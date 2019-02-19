// Consider this variable:

var mantra = "Be the dev";

// // 1. Write the code that returns 'B' from mantra.
// // Answer One:
console.log(mantra.charAt(0))
// // // Answer Two:
if (mantra.includes("B")) {
  console.log("contains B");
}
// // // 2. Write the code that determines if there is a 'x' in mantra.
if(mantra.includes("x")) {
  console.log("contains x")
} else {
    console.log("does not contain x");
 }
// // // 3. Write the code that determines if there is a 'v' in mantra.
if(mantra.includes("v")) {
  console.log("Contains V")
} else {
   console.log("Does not contain V");
  }
// Stretch: Write the code that returns the position of 'v' in mantra.
//Answer 1:
if(mantra.includes("v", 9)){
  console.log(9);
} else {
    console.log("there is no V in that postion");
}
// // Answer 2:
if(mantra.charAt(9)){
  console.log(9);
}
// *** What is a better way to do this without hard coding??

// Consider the following statement:

// var codingIsEasy
// var imBored
//
// if (codingIsEasy === imBored) {
//     console.log("I need more!")
// } else {
//     console.log("Steady as she goes")
// }
// // **changed the equation not the variable ^
// // // 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
var codingIsEasy= 2
var imBored=2

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
  }
// // Consider the following statement:
//
// var imLost
// var imFrustrated
//
// if (imLost < 0 || imFrustrated < 0) {
//     console.log('Break time!')
// } else {
//     console.log('Keep coding!')
// }
// //
// // 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
var imLost= 0
var imFrustrated= 0

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
  }
// // 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev"
var newLett = mantra.split("")

console.log(newLett);

// // Stretch: Using a while loop.
var mantra= ["Be the dev"]
for (let i = 0; i < mantra.length; i++){
  console.log(mantra[i]);
}
// **is this what was being asked for slightly confused??
// // Super Stretch: Using forEach().
//
// // Consider the following variable:
//
// var message = "thisisateststring"
//
// // 7. Write a function that takes a string like message as an argument and returns the string without vowels.
// Answer one:
var message= "thisisateststring"

console.log(message.replace(/[aeiou]/gi, ''));
//
// Answer two:
var message = 'thisisateststring'

var newmessage = ''
function removeVowel(string){
    for (let i = 0; i < string.length; i++) {
        if (string[i]!== 'a' && string[i]!=='e' && string[i]!=='i' && string[i]!=='o' && string[i]!=='u'){
            newmessage += string[i] ;
        }
    }
      return newmessage;
}
console.log(removeVowel(message))
//
// // // Stretch: Update your function to throw an exception if the argument is not a string.
if (message === "thisisateststring"){
  console.log(message.replace(/[aeiou]/gi, ''))
} else {
    console.log("This doesn't equal my message");
  }
//**I hard coded again, what function do i want??
// // Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
//
// // Consider the following variable:
//
var toonimals = [ {name: 'Itchy', animal: 'mouse'},
 {name: 'Stimpy', animal: 'cat'},
  {name: 'Daffy', animal: 'duck'},
   {name: 'Scratchy', animal: 'cat'},
    {name: 'Ren', animal: 'dog'},
     {name: 'Felix', animal: 'cat'}]
//
// // // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
var cats = []
function onlyCats(tooncats){
    for (let i=0; i<tooncats.length; i++){
        if(tooncats[i].animal==='cat'){
        tooncats[i];
        cats.push(tooncats[i])
        }
    }
    return cats;
}
console.log(onlyCats(toonimals))
