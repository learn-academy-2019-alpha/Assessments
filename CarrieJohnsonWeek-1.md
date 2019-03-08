# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
Boolean, null, string, NaN, object, undefined, symbol
Primitive data types: null, string, boolean, number, undefined

2. What's the difference between =, ==, and === in JavaScript?
= assigns value to something
== can be similar
=== has to be exact

3. What is the difference between an array's index and length?
Array's index is a specific point in the array and the length is the total length of the array

4. What are the three parts of a for loop?
i=0: starting point
i<array.length: how long we want loop to go for
i++: what we want the loop to do

5. What is a function's declaration, argument, and call?
declaration: when you're telling the function what it will be doing
argument: the data the function will be executing and processing
call: calling function to execute code and return the result

6. What are the three main steps in saving work to github?
git add
git commit -m ''
git push

7. What is the terminal command to move directories?
Use cd to move directories.

8. Do you have a suggestion for a Check In question?
What was the name of your first car?

9. What was your favorite topic this week?
My favorite topic this week was classes.

10. What was your "A-ha!" moment this week?
Working with Test Jest.

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
undefined because var text is outside of the function and it does not recognize it. var text inside is after the console.log so the function will exit before it gets to var text inside.

2. What is JSON? How does it relate to javascript objects?
JSON is Java Script Object Notation
It relates to javascript objects because it's the format javascript uses for storing data as text.

3. Describe a closure, what is it good for and how do you recognize one?
A closure is a combo of functions and can reference it's surroundings. It can access it's own scope, outside function's variables, and global variable.
