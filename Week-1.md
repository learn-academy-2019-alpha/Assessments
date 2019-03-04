# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
string-primitive
booleans-primitive
numbers-primitive
null-primitive
variables-not primitive
arrays-not primitive
objects-not primitive
2. What's the difference between =, ==, and === in JavaScript?
The difference between  == and === is that === means that not only that the value is equal but also the datatype. And I think the single = is used just to declare variables, functions, arrays, etc.
3. What is the difference between an array's index and length?
An array's length is how many values or items are in that array and an arrays index is where a value or item is located or the position of the item.
4. What are the three parts of a for loop?
The first part is where you want the loop to start usually it starts at 0, the second part how long you want the loop to run, and lastly the 3rd part is by how much you want the loop to increase/decrease by.
5. What is a function's declaration, argument, and call?
A function's declaration includes the name of the function, the parameters, and what's inside the body of the function. A functions argument is what you put inside the parentheses when calling the function. And I'm not sure how to describe a functions call but its when you console.log it and enter the arguments you want.
6. What are the three main steps in saving work to github?
step one: after adding your changes use git add .
to put it on the stage
step two: use git commit -m "your little message"
to commit to the changes you made
step three: use git push to upload them to the github website
7. What is the terminal command to move directories?
You use the cd command
8. Do you have a suggestion for a Check In question?
Not really, sorry
9. What was your favorite topic this week?
My favorite one the topic of class and object because it was cool creating the new objects and giving them actions/behaviors.
10. What was your "A-ha!" moment this week?
The first time we covered the topic of class I didn't understand it completely but the second time around I understood it pretty well.
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
I think the console will show 'outside' since javascript reads top to bottom.

I tested the problem out and it came back as undefined which I did not expect because text is defined if anything I would've expected it to throw an error saying that text is defined twice or something. weird.
2. What is JSON? How does it relate to javascript objects?
no idea what JSON is so I googled it. And I think its a format for writting objects in javascript.
3. Describe a closure, what is it good for and how do you recognize one?
From what I understand closure is similar to a local scope, which is good for using the same variable/const names Without running into problems and you recognize it if a variable or const is inside a pair of curly braces and Not outside them because then it would make it global.
