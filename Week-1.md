# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
Number, String, Boolean, Object, Symbol, Undefined, Null, NaN
The primitives data types are number, string, null, undefined, and boolean.

2. What's the difference between =, ==, and === in JavaScript?
A single = assigns a value to something.
A double == compares two things and checks if they are similar.
ex: var 41 == "41" `//truthy`
A triple === checks if the value of something is the same value as it what it is being checked against.

3. What is the difference between an array's index and length?
An array's index is the position of an element within that array as to the length is how many elements are within
that array.

4. What are the three parts of a for loop?
The three parts of the for loop are:
  - 1. Telling the loop where to begin (i = 0)
  - 2. Telling the loop when to stop looping (i < array.length)
  - 3. Telling the loop what to do each time it loops. (i++ or i--)

5. What is a function's declaration, argument, and call?
The declaration is when you declare that the following is a function by using the term "function" before the rest
of your code.

The argument is the data that is going to be passed within the function. It's the data that the function uses
when it operates upon being called.

The call is when the function is ordered to run.

6. What are the three main steps in saving work to github?
git add .
git commit -m "message"
git push

7. What is the terminal command to move directories?
cd <directory name>
cd .. (move one directory back)

8. Do you have a suggestion for a Check In question?
What is your favorite place to travel/visit?
What is your dream job?
What previous jobs have you had?

9. What was your favorite topic this week?
My favorite topic this week was the testing. It was quick and short but it made the programming process
easier for me because I could write the test, then write the actually Javascript which was easier
after writing the tests.

10. What was your "A-ha!" moment this week?
My "A-ha!" moment this week was when we were completing the object inheritance portion of the week. Objects were very
grey to me up until then. I'm not 100% comfortable just yet but I feel much better about it now.

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

The browser's console will log `undefined` because the variable `var text = 'outside'` is not available to the
function because of closure. I believe this is an example of hoisting.

2. What is JSON? How does it relate to javascript objects?
JSON is a javascript object language used to store object data. It allows you to work with javascript objects as data
in a less complicated way.

3. Describe a closure, what is it good for and how do you recognize one?
Closure restricts the usage of variables based on scope. Closure has access to global variables and variables declared within itself. Closure preserves the functions variable and upon the function being called, the variables located inside no longer exist. Recognizing it is where I am getting stuck.
