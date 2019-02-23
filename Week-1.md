# Week 1 Assessment

### Without using Google answer the following:

1.  List the data types in Javascript. Indicate which are primitives.
    String, numbers, booleans, objects, undefined & null.

2.  What's the difference between =, ==, and === in JavaScript?
    ==== compares value and data Type '3'==='3' true
    == compares value regadless of data type 3=='3' true
    = assigns value to something

3.  What is the difference between an array's index and length?
    Index begins at zero and length starts counting at 1  

4.  What are the three parts of a for loop?
    for(let i=0; i &lt; array.length; i++)
    i=0 is telling you where the first item is
    i &lt; array.lenght; lets you know to count up from 0
    i++ increments by 1 going through the array

5.  What is a function's declaration, argument, and call?
    A function declaration is a function that is bound to an identifier, or name.
    The values that are passed to the function when it is called are called arguments. Arguments
    can be passed to the function as values or variables.  
    A function call executes the function body, or all of the statements between the
    curly braces in the function declaration

6.  What are the three main steps in saving work to github?
    git status of your work; git add .; git commit; & git push.

7.  What is the terminal command to move directories?
    You'd use the 'mv' command.

8.  Do you have a suggestion for a Check In question?
    what are you most proud of at this point in your life?

9.  What was your favorite topic this week?
    I enjoyed learning that there were methods such as map and filter to make life a bit simpler.

10. What was your "A-ha!" moment this week?
    I really liked the alumni panel. It was nice to hear their struggles and success stories.    

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1.  Look at this Javascript and try to predict, what will the browser's console show?

```javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

     It would be undefined because it is logged twice.

2.  What is JSON? How does it relate to javascript objects?
    JOSN is the text format that is closely related to JavaScript. 

3.  Describe a closure, what is it good for and how do you recognize one?
    A closure is a function being enclosed in another function. We can recognize it
    by looking for a variable that only exists in local scope.  
