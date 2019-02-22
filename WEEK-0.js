// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

console.log(mantra.charAt("B"));

// 2. Write the code that determines if there is a 'x' in mantra.

console.log(mantra.includes("x"));

// 3. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes("v"));

// Stretch: Write the code that returns the position of 'v' in mantra.

console.log(mantra.indexOf("v"));

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

var imLost = false;
var imFrustrated = false;

if (imLost || imFrustrated) {
  console.log('Break time!')
} else {
  console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev";
for (var i = 0; i < mantra.length; i++) {
  console.log(mantra[i]);
};

// Stretch: Using a while loop.
var mantra = "Be the dev";
var j = 0
while (j < mantra.length) {
  console.log(mantra[j]);
  j++;
}

// Super Stretch: Using forEach().

var mantra = "Be the dev"
var mantrarray = mantra.split(" ")
mantrarray.forEach(function(element) {
  console.log(element);
});
// Consider the following variable:

// var message = "thisisateststring"


// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

var message = "thisisateststring".split("")
var removeVowels = ['a', 'e', 'i', 'o', 'u']
var newMessage = [];
//
function noVowels(message) {
  for (let i = 0; i < message.length; i++) {
    if (removeVowels.indexOf(message[i]) === -1) {
      newMessage.push(message[i])
    }
  }
  newMessage = newMessage.join('')
  return newMessage
}
console.log(noVowels(message));



// Stretch: Update your function to throw an exception if the argument is not a string.
var message2 = ("thisisateststring").split("")
var removeVowels2 = ['a', 'e', 'i', 'o', 'u']
var newMessage2 = [];
function noVowels2(message2){
  for (let i = 0; i < message2.length; i++) {
     if ( removeVowels.indexOf(message2[i]) === -1) {
      newMessage2.push(message2[i])

    }
    newMessage2 = newMessage2.join('')
    return newMessage2
  }

  }
console.log(noVowels2(message2));


// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
var message1 = 1234
var newMessage1 = [];

function noVowels1(String) {
  for (let i = 0; i < message1.length; i++) {
    if (typeof message1 !== 'string') {
      return ('not string')
    } else if (removeVowels.indexOf(message1[i]) === -1) {
      newMessage1.push(message1[i])
      newMessage1 = newMessage1.join('')
      return newMessage1
    }
  }

}
console.log(noVowels1(message1));






// Consider the following variable:

var toonimals = [{
  name: 'Itchy',
  animal: 'mouse'
}, {
  name: 'Stimpy',
  animal: 'cat'
}, {
  name: 'Daffy',
  animal: 'duck'
}, {
  name: 'Scratchy',
  animal: 'cat'
}, {
  name: 'Ren',
  animal: 'dog'
}, {
  name: 'Felix',
  animal: 'cat'
}]
//
8. //Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

const cat = toonimals.filter(word => {
  return word.animal === "cat"
})
console.log(cat);
