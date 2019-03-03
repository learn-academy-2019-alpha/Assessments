# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

- number, string, symbols, null, undefined,  boolean are consider primitives datatype. The last datatype is objects.


2. What's the difference between =, ==, and === in JavaScript?

   === is used to compare the value and datatype
   == is used only to compare the value
   = is used to assign a value to a variable


3. What is the difference between an array's index and length?

 - Array index starts with the value 0 while the length starts from 1 which makes it one number higher than the index.


4. What are the three parts of a for loop?

  -for (let i=0; i<array.length; i++)

  -Initialize, stoping condition and increment or decrement.


5. What is a function's declaration, argument, and call?

  - Function's declaration is a way of writing a function. It consists the key work function, the function word, the argument or placeholder and the function body. The argument is the information is being passed into the function when the function is being called. calling the function make the function run the code inside the function.


6. What are the three main steps in saving work to github?

  -   git add, git commit and git push


7. What is the terminal command to move directories?

 - use the command mv


8. Do you have a suggestion for a Check In question?

 - what is your favorite vacation place?


9. What was your favorite topic this week?

  -Learning about testing jest.


10. What was your "A-ha!" moment this week?

- Finally understanding classes

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt();      

- It will console log undefined because of hosting and creating the same variable. The console log inside the function will try to access the variable text that is outside of the function. Since there is two text variable is return undefined unless the variable inside the function is remove. The text variable inside the function will not be log because of hosting, declared after it has been used.
```

2. What is JSON? How does it relate to javascript objects?

- JSON is a way of storing and transporting from a server to webpage. Since it is formatted in text only it can be written in any language Including javascript. It relate to javascript object because it has key name and value.

3. Describe a closure, what is it good for and how do you recognize one?

  - Closure is way of making a global variable become local variable. This is useful because it helps to make the variable private which means the variable  can only accessed by the function, the variable exist in. We can recognize it by looking a variable that only exist in a function or local scope but not in global scope.
