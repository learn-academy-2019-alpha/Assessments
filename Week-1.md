# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

    The data types in Javascript are  numbers, strings, booleans, null, undefined, symbols (new to ES6), and objects. The first six listed data types are known as the primitive data types.

2. What's the difference between =, ==, and === in JavaScript?

    = is for assigning value to a variable (assignment operator). While == is a comparison operator that means "equals to"; however, it forces type coercion, where the values are converted to the same data type and then compared.  === also means "equals to", but it is a strict comparison between equal values of the same data type.

3. What is the difference between an array's index and length?

    Array's index is the position of the values in an array. While the length of an array is a property that returns the number of elements in an array.

4. What are the three parts of a for loop?

    The three parts of a for loop are 1) The for key word, 2) The conditions for the block of code to run, 3) The block of code to be executed each time the conditions allow it

5. What is a function's declaration, argument, and call?

    The function declaration is also known as the function declaration or the entire function that includes the function key word, the name of the function, the parameter, and the block of code to be executed. Arguments are the real values that are passed into the function. Function must be called to run by using the functions's name or a variable equalled to the function.

6. What are the three main steps in saving work to github?

    You have to first do 1)git add .
    2)git commit -m "add message"
    3)git push
    in the terminal.

7. What is the terminal command to move directories?

    cd is the terminal command to change directories to a directory found inside the current directory. cd .. is to move up one directory.

8. Do you have a suggestion for a Check In question?

    Check In Question: What is your favorite place in San Diego?

9. What was your favorite topic this week?

    My favorite topic was class inheritance.

10. What was your "A-ha!" moment this week?

    Understanding .map() and .filter() and understanding classes more clearly.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
    The browser will show undefined.

2. What is JSON? How does it relate to javascript objects?

    JSON is JavaScript Object Notation, but the JSON format is text only. Data in JSON is in name/value pairs.

3. Describe a closure, what is it good for and how do you recognize one?

     Closure is a collection of all the variables in scope at the time of creation of the function (lexical environment). Closures are useful for making a global variable, local. It gives you access to an outer function’s scope from an inner function. 
