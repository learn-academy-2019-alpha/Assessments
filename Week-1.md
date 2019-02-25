# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
There are seven data types. Primitive data types = [number, strings, boolean] composite data types= [objects, functions, arrays] trivial data types =[null and undefined]

2. What's the difference between =, ==, and === in JavaScript?
(=) would be used to assign something to a var. (==) would be used in the same way but its preferred to use this if you want more flexibility with data types. For example a string of "seven" vs 7.

3. What is the difference between an array's index and length?
An index of an array is the specific placement and the length is how long that index is.

4. What are the three parts of a for loop?
The three parts are- The initializer, the condition and the final expression.
example-
for ([initialization]; [condition]; [final-expression]){

}

5. What is a function's declaration, argument, and call?
A declaration is the name of the variable. The argument is where the placeholder is. And when you call it you use the functions name followed by parenthesis.

6. What are the three main steps in saving work to github?

git add
git commit -m
git push

7. What is the terminal command to move directories?
  The terminal command is "cd".

8. Do you have a suggestion for a Check In question?
  What are some hobbies you have? or what hobbies do you have that have a major impact on your wellbeing?

9. What was your favorite topic this week?
 Testing was a fav for this week.

10. What was your "A-ha!" moment this week? When I compared global scope to weird gamer nerd things I can relate to.

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
//answer- The console shows "undefined" because "console.log" within the function logIt gives the function closure. We then created var text = "inside" but that was after we logged it. When we called it below, it wouldnt access the var = "outside" because that variable lives outside the function being called. I may be entirely wrong on this.

2. What is JSON? How does it relate to javascript objects?
JSON stands for JavaScript Object Notation. I had to google it... but... I think it relates to the syntax... I had a hard time trying to figure this out.

3. Describe a closure, what is it good for and how do you recognize one?
A closure is what you would need to prevent a scope within a function messing with global scope and vice versa. Im not sure how you would recognize one... I suppose within the code on stretch question-1 There was closure with the brackets...
