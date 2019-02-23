# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
string, number, booleans, objects, null and undefined

2. What's the difference between =, ==, and === in JavaScript?
=== compares value and type. Both have to be true
== compare value and type but only one have to be true
= it assigns value

3. What is the difference between an array's index and length?
array's index starts from 0 and it one less than length  
length start at 1 and counts the number of items. Length is always one greater than Index

4. What are the three parts of a for loop?
i = 0 is the start
i < number is how long the loops should run
i++(anything) is what the loop is doing

5. What is a function's declaration, argument, and call?
declaration is creating a variable
argument are values passed to a function when it is invoked
call is function that is about to be executed after another function has
finished executing

6. What are the three main steps in saving work to github?
git status, git add, git commit -m and git push

7. What is the terminal command to move directories?
 mv moves directories

8. Do you have a suggestion for a Check In question?
places you have visited?

9. What was your favorite topic this week?
   mop, filter and test

10. What was your "A-ha!" moment this week?
      using map instead of loop

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

console.log(logIt(text))
```
it will console.log undefined

2. What is JSON? How does it relate to javascript objects?

JSON is a syntax for storing and exchange data. It used for transmitting data in
web application

3. Describe a closure, what is it good for and how do you recognize one?

closure is the way the inner function access the outer function variables.
It is useful because it make a global scope a local scope which is private.
It can be recognize if the global variable is access inside a function. 
