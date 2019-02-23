# Week 1 Assessment

### Without using Google answer the following:

###1. List the data types in Javascript. Indicate which are primitives.
number, string, boolean, null, undefined, NaN, symbol, object

the primitives are: number, string, boolean, null, undefined

###2. What's the difference between =, ==, and === in JavaScript?

=== has to be the exactly same thing
== they can be similar enough
= to assign

###3. What is the difference between an array's index and length?
length is the amount of items in an array while the index is where the item resides in an array.

###4. What are the three parts of a for loop?
i=0 ===> which is where we start
i < array.length ===> how long we want to go
i ++ or i -- i +=1 ===> what we want to do eg: i++ goes up in the array

###5. What is a function's declaration, argument, and call?
declaration = when you use "function" to assign a certain block of code to be a function

argument = what the function will be executing and processing which is the data being ran through the function

call =  when you're calling the function to execute the code and return the result

###6. What are the three main steps in saving work to github?
git add
git commit -m "enter message here"
get push

###7. What is the terminal command to move directories?
use cd to move into a specific directory and cd .. to go back one

###8. Do you have a suggestion for a Check In question?
~1. If you could have any job in the world what would you choose?

~2. what is one place you want to visit sometime in your life?

~3. A fact most people wouldn't learn right off the bat?

###9. What was your favorite topic this week?
testing with jest because it was really interesting to build this intricate test and then build the code to pass through all the tests.

Also, it made you think of ways to potentially break your code and then you to cover that potential failure with adding code to keep your code from breaking.
###10. What was your "A-ha!" moment this week?
When we worked on the pig latin and realizing that we had strings inside of our array and had to use the correct method because a lot of it wasn't working and once we figured it out we knew exactly what method to use.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

###1. Look at this Javascript and try to predict, what will the browser's console show?

 ```javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
undefined because var text = 'outside' is outside of the function therefore it does not recognize it
var text = 'inside' is after the console.log therefore it wont read the var since it is listed AFTER the console.log

the function knows that text is suppose to be a variable but since it was never assigned above the console.log(text) is will say undefined until you assign it ABOVE.

###2. What is JSON? How does it relate to javascript objects?
JSON stores all the data entered and JSON is an object which is how it's related to javascript objects

###3. Describe a closure, what is it good for and how do you recognize one?
A closure allows you to use global variable inside of a function.

you can recognize it when there is a function within a function.  
