// Consider this variable:
var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra. (I wrote this function out because it said to return...)
function letter(num){
 return mantra.charAt(num);
}
letter(0);

// 2. Write the code that determines if there is a 'x' in mantra.
mantra.includes('x')

// 3. Write the code that determines if there is a 'v' in mantra.

mantra.includes('v')

// Stretch: Write the code that returns the position of 'v' in mantra.
mantra.indexOf('v')

// Consider the following statement:

var codingIsEasy=true
var imBored=true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost=false
var imFrustrated=false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

// (The for loop below will log the letters and spaces in mantra on the console)

var mantra = "Be the dev";
for (let i=0; i<mantra.length; i++){
  console.log(mantra[i]);
}

// (The for loop below will log the only the letters of mantra, but not the spaces on the console)

for (let i=0; i<mantra.length; i++){
  var letter = /^[A-Za-z]+$/
    if (mantra[i].match(letter)){
    console.log(mantra[i]);
    }
}

// Stretch: Using a while loop. (The while loop below will log the letters and spaces in mantra on the console)
var mantra = "Be the dev";
var i = 0;
while (i < mantra.length) {
  console.log(mantra[i]); i++ ;
}

// Super Stretch: Using forEach(). (The forEach() method below will log the letters and spaces in mantra on the console)
var mantra = "Be the dev";
var array= mantra.split("")
array.forEach(function(element) {
  console.log(element);
});


// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
var message = 'thisisateststring'

var newmessage = ''
function removeVowel(string){
    for (let i = 0; i < string.length; i++) {
        if (string[i]!== 'a'&& string[i]!=='e'&& string[i]!=='i'&& string[i]!=='o'&& string[i]!=='u'){
            newmessage += string[i] ;
        }
    }
      return newmessage;
}
removeVowel(message);


// Stretch: Update your function to throw an exception if the argument is not a string.

var message = 'thisisateststring'
var newmessage = ''
function removeVowel(string){
    if (typeof string!=='string'){
    console.log('Not a String!');
    } else{
        for (let i = 0; i < string.length; i++) {
            if (string[i]!== 'a'&& string[i]!=='e'&& string[i]!=='i'&& string[i]!=='o'&& string[i]!=='u'){
            newmessage += string[i] ;
              }
          }
      return newmessage;
      }
}
removeVowel(message);


// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
var message = 'thisisateststring'
var newmessage = ''
function removeVowel(string){
    if (typeof string!=='string'){
    throw new TypeError('Not A String', WEEK-0.js, 120);
    // The TypeError contains file name, file name (optional) and line number (optional)
    } else{
        for (let i = 0; i < string.length; i++) {
            if (string[i]!== 'a'&& string[i]!=='e'&& string[i]!=='i'&& string[i]!=='o'&& string[i]!=='u'){
            newmessage += string[i] ;
              }
          }
      return newmessage;
      }
}
removeVowel(message);


// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
var cats = []
function onlyCats(tooncritters){
    for (let i=0; i<tooncritters.length; i++){
        if(tooncritters[i].animal==='cat'){
        tooncritters[i];
        cats.push(tooncritters[i])
        //If you want only names in cats you can include...
        // cats.push(tooncritters[i].name)
        }
    }
    return cats;
}
onlyCats(toonimals);
