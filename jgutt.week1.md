# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
string, number, symbol, boolean, null, undefined... i think these are all primitive. objects also exist... definitely not primitive. is an array a data type too?

2. What's the difference between =, ==, and === in JavaScript?
= is used to set a variable to a value
== checks equivalency but not data type (1 == "1")
=== checks equivalency and data type (1 !== "1")

3. What is the difference between an array's index and length?
array indexes begin at 0. length is a property and begins at 1. so in [1, 2, 3]: the length is 3 but there are only indexes 0, 1, 2.

4. What are the three parts of a for loop?
- tell the loop where to begin (typically i = 0)
- tell the loop where to end (typically 1 < array.length)
- tell the loop how to increment/decrement though array (typically increment i++ but could many other things depending on your goal or where the initial i value was set)

5. What is a function's declaration, argument, and call?
- declaration - first line of function (const myFunc = or function myFunc())
- argument - placeholder in initial declaration; what do you need to pass into function in order to give function something to do. in example, (num) is argument:
    const myFunc = (num) => num + 2;
- call - when you ask the function to perform the task you've set it up to do
   const myFunc = (num) => num + 2;
   myFunc(6) <--- this is the call; after all closing brackets of function

6. What are the three main steps in saving work to github?
interesting question. assuming repository is already set up and you've already finished the code in your local environment, i'd say the 3 steps are:
 git add file_name
 git commit -m "description of what was done"
 git push

7. What is the terminal command to move directories?
cd   

8. Do you have a suggestion for a Check In question?
not really, but i very much appreciated thursday's check in question... what do you do to unwind? it was well timed as i had not properly done so the night before and felt the effects thursday am.

9. What was your favorite topic this week?
testing

10. What was your "A-ha!" moment this week?
i was really pleased with matt's fizzbuzz question... how to complete fizzbuzz without a conditional statement? i didn't initially have any ideas, but eventually had some real fun trying to set up an object with fizz, buzz, and fizzbuzz as the keys then filter through an array to push the return values to the object value. it was definitely not perfect code, but i started to really see the larger picture of classes and how to push myself.

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
undefined? if var text = 'inside' was declared before the console.log within logIt, i think the console would show 'inside', but in this situation, i don't think anything will happen.

i never googled this, but i did copy/paste this code to a js file, run it to show undefined, and then moved var text = 'inside' before the console.log and it did log 'inside'

2. What is JSON? How does it relate to javascript objects?
this is on my list for questions to google this weekend. hooray. ill do it now. i have no answer prior to google.
google has revealed json is basically the way to parse data into simple text. its based on javascript, but is language independent bc most (all?) programming languages have data types similar to a javascript object or array.

3. Describe a closure, what is it good for and how do you recognize one?
prior to google, i wouldve called closure just a closing bracket on a function, object, class, whatever. post google, id call a closure the same thing.
