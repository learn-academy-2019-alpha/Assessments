# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
Boolean, Number, String, Undefined, Null, Object, and Symbols. Every item listed is a primitive datatype except for object.

2. What's the difference between =, ==, and === in JavaScript?
== is known as the coercion operator. It allows for two values that are of close to each other. For example false == 0 would be true since false is technically 0. However === is a strict comparison operator and takes two values BUT also takes in in the datatype of those values. = is used to assign a value to something not neccessarily used to do strict comparisons.

3. What is the difference between an array's index and length?
An array's index is the index position of each value listed within the array. For example :
let exampleArray = ["this", "is", "cool"]
The index positions of this array would be [0,1,2] as index locations always start with 0. However length is taking how many values there are within the given array. In the example above, array length would be 3 since there are 3 values within the array.

4. What are the three parts of a for loop?
Example for loop:
for (let i = 0; i < range; i++)
The first part of the for loop is where the index count (position) starts. The second part of the loop is used to state how many iterations of the loop it goes through. The last part of the for loop is used to see which direction the loop should go. So ++ means that it should keep running through the loop until the 2nd condition is met.

5. What is a function's declaration, argument, and call?
A functions declaration is essentially creating the instructions. So the name of the function, declaring that the program being written is going to be a function and Parathenses to declare how many arguements the function will take. The function arguments is what is being passed through the function. So if we have a var = "timothy" I would want to pass this variable through the function in place of the argument. The function call is used to perform the function.

6. What are the three main steps in saving work to github?
The three main steps in github are
git add . ; git commit -m" ; git push origin master

7. What is the terminal command to move directories?
The terminal line command to move directories is cd

8. Do you have a suggestion for a Check In question?
If you were able to travel anywhere in the world, where would you go and why?

9. What was your favorite topic this week?
My favorite topic this week was actually high order functions and testing. I found these topics enjoyable, hard, and challenging, but interesting to learn and I know these will be very helpful in the future.

10. What was your "A-ha!" moment this week?
My A-ha! moment this week was during the review, when trying to do the assessment on my own and realizing that even the tiniest syntax error will drive you crazy for hours.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
The browser console will show Undefined because when you run the code it will read from top to bottom. And since there is a variable declared within the function, but was put AFTER the console log, it will return Undefined because it knows there is a variable, but because it read console.log first it stops there and the computer thinks its done. The global variable of "outside" did not print because there was a variable within the function already making that variable in scope with the function.

2. What is JSON? How does it relate to javascript objects?
JSON is JavaScript Object Notation. It is a text format that makes it easy to share data between devices. Another advantage of JSON is the ability to be able to pass it to a javascript object easily. One of the main differences is that JavaScript Objects values can contain any datatype within the object including a function which cannot be done with JSON.

3. Describe a closure, what is it good for and how do you recognize one?
A closure is when a global variable can be made local within a function. As for the example above, the var text = "inside" would be a local variable and closed within that function. So another function with the same name variable can be called. A closure is closing the function in order to maintain a local scope within.
