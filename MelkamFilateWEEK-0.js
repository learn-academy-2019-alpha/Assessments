// Consider this variable:

  var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

  console.log(mantra.charAt('B'));

// 2. Write the code that determines if there is a 'x' in mantra.

  console.log(mantra.includes('x'));

//3. Write the code that determines if there is a 'v' in mantra.

  console.log(mantra.includes('v'));

// Stretch: Write the code that returns the position of 'v' in mantra.

  console.log(mantra.indexOf('v'));

// Consider the following statement:

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

  var codingIsEasy = true;
  var imBored = true;

    if (codingIsEasy && imBored) {
      console.log("I need more!")
    } else {
      console.log("Steady as she goes")
    }


// Consider the following statement:

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

  var imLost = false;

  var imFrustrated = false;

  if (imLost || imFrustrated) {
    console.log('Break time!')
  } else {
    console.log('Keep coding!')
  }

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.//

  var mantra = "Be the dev"

  for (let i = 0; i < mantra.length; i++) {
    console.log(mantra[i]);
  }

// Stretch: Using a while loop.

  var mantra = "Be the dev"
  var i = 0;

  while (i < mantra.length) {
    console.log(mantra[i]);
      i++;
    }

// Super Stretch: Using forEach().

  var mantra = "Be the dev";
  var mantraArray = mantra.split(' ');
    mantraArray.forEach(function (words) {
      console.log(words);
  });

//Consider the following variable:

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

  var message = "thisisateststring";

  function withOut(message) {
  var emptyVowels = [];
    message = message.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < message.length; i++) {
      if (vowels.indexOf(message[i]) < 0) {
        emptyVowels.push(message[i]);
    }
  }

    emptyVowels = emptyVowels.join('');
      return emptyVowels;
    }

    console.log(withOut(message));


// Stretch: Update your function to throw an exception if the argument is not a string.

var message = true;

function withOut(message) {
  var emptyVowels = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < message.length; i++) {
      if (vowels.indexOf(message[i]) < 0) {
        emptyVowels.push(message[i]);
    }
  }

    emptyVowels = emptyVowels.join('');
      return emptyVowels;
    }

//console.log(withOut(message))

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

  var message = 7;

  function withOut(message) {
  var emptyVowels = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < message.length; i++) {
      if (vowels.indexOf(message[i]) < 0) {
        emptyVowels.push(message[i]);
    } else {
      return 'Not a string';
    }

    emptyVowels = emptyVowels.join('');
      return emptyVowels;
    }
  }

  console.log(withOut(message));


// Consider the following variable:

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

  var toonimals = [{
    name: 'Itchy',
    animal: 'mouse'
  },
  {
    name: 'Stimpy',
    animal: 'cat'
  },
  {
    name: 'Daffy',
    animal: 'duck'
  },
  {
    name: 'Scratchy',
    animal: 'cat'
  },
  {
    name: 'Ren',
    animal: 'dog'
  },
  {
    name: 'Felix',
    animal: 'cat'
  }
];

  var catsToon = toonimals.filter(function(toon) {

    return toon.animal === 'cat';

});

  console.log(catsToon);
