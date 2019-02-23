# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
    The data types in Javascript are: Number, String, Boolean, Undefined, Null, and Symbol. They are all primitive. Object is another data type in JavaScript, but it is not primitive.

2. What's the difference between =, ==, and === in JavaScript?
    The "=" is an assignment operator only, the "==" compares two values for equality, and the "===" compares two values for value type and equality.

3. What is the difference between an array's index and length?
    An array's index refers to the position of an element within the array and an array's length refers to the actual number of elements in the array.

4. What are the three parts of a for loop?
    The first part of the for loop is where the counter starts, the second part specifies exactly how many times the loop should iterate, and the last part specifies what to do after each iteration through the loop.

5. What is a function's declaration, argument, and call?
    A function's declaration is the name of the function, the argument is the value that is passed into the function, and the call refers to whenever the function is invoked. A function has to be called in order to run.

6. What are the three main steps in saving work to github?
    1) Run git add . to add your files
    2) Run git commit -m with your personalized message to save the changes to your files
    3) Run git push origin master to add your updated files to your github repository

7. What is the terminal command to move directories?
    You type cd "directory name" to move to the directory you want to work in and you type cd .. to move out of your current directory.

8. Do you have a suggestion for a Check In question?
    Suggestion: What is your favorite scary movie?

9. What was your favorite topic this week?
    My favorite topic from this week was the higher order functions like .map() and .filter() because they are cool shortcuts.

10. What was your "A-ha!" moment this week?
    My "A-ha!" moment was when I finally understood how to use the .filter() function.

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
    This function will print out "inside" since it is within the scope of that function. The text of "outside" will not print because it was declared outside of the function and it was not passed in as an argument to the function.

2. What is JSON? How does it relate to javascript objects?
    JSON stands for JavaScript Object Notation and it relates to how objects are created and referenced.

3. Describe a closure, what is it good for and how do you recognize one?
    Closure refers to the scope of a function. You would recognize a closure whenever you see a an inner function enclosed within an outer function.
