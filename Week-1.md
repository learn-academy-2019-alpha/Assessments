# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Number = Primitive
String = Primitive
Boolean = Primitive
Undefined = Primitive
Null = Primitive
Symbol = Primitive
Objects
Functions
Array



2. What's the difference between =, ==, and === in JavaScript?

= is the assignment operator
== is comparing two variables but they don't have to be exactly the same
=== is a strict comparison

3. What is the difference between an array's index and length?
An arrays index is the position and length shows how many variables there is in the array


4. What are the three parts of a for loop?

The first part is the position the loop will start, the second is how long the loop will run and third what you want it to do after the loop

5. What is a function's declaration, argument, and call?

The declaration is creating the instructions, the argument is where you can pass in outside information and the call is to preform the task

6. What are the three main steps in saving work to github?

git add .
git commit -m "message"
git push

7. What is the terminal command to move directories?

cd (name of folder)
cd .. (move back 1 folder)

8. Do you have a suggestion for a Check In question?

What made you want to start coding

9. What was your favorite topic this week?

testing it was a nice introduction of something new plus practicing creating functions

10. What was your "A-ha!" moment this week?

To be honest didn't have one this week

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
I think it will console.log "inside" because it is calling the function and var text is inside of the function

2. What is JSON? How does it relate to javascript objects?

JSON stand for: javascript object notation.

3. Describe a closure, what is it good for and how do you recognize one?

Closure is a way for variables in certain part of your code to only be associated within its parameters. It is good so you can use the same variable in other parts of your code. Any variable in a function would be considered a variable because it is not global 
