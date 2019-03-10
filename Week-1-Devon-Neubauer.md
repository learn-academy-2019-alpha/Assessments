# Week 1 Assessment

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

primitive: string, number, symbol, boolean, null, undefined,
Not Primitive: object

2. What's the difference between =, ==, and === in JavaScript?

= means equal to (for variables, equations)
== means relatively equal to (can compare two different types of data types)
=== must be exactly equal to (will not interpret differing data types)

3. What is the difference between an array's index and length?

the index is the location of a data type with in the array staring with 0 and the length is the about of index items within the array.

["cat", "dog", "horse")
index 1 = "dog"
length = 3

4. What are the three parts of a for loop?

The i = o - sets where your loop will start;
the i < var.length - sets how many times it will loop through;
and the i++ - sets how it will proceed through the loop incrementally - either additive or subtractive

5. What is a function's declaration, argument, and call?

The declaration is naming a function and what operation it will perform
the argument is the values you are passing through the function;
when you call a function, it performs the function with the values you assign.

6. What are the three main steps in saving work to github?

git status
git add . (or file.name)
git commit -m 'comment here'

7. What is the terminal command to move directories?

mv /directoryToMove/ /newlocation/

8. Do you have a suggestion for a Check In question?

What is one of your best childhood memories?
What movie have you seen the most?
Do you like Daylight Savings time or Standard Time better?
If you one a million dollars tomorrow, what is the first thing you would do with it?

This is silly but could be real fun:
"If you had to come up with a Drag Queen name - what would it be?

9. What was your favorite topic this week?

Although not an actual topic, we did spend a day on Mob Programing and I thought the process was fantastic. the synergy was exciting and solution finding as a team effort is an arena that I really enjoy working in. Look forward to more opportunities to do this.

10. What was your "A-ha!" moment this week?

Realizing that all this information over-load will eventually sink in and to stop stressing over it. I have focused on really understanding the concept of what the code is actually performing versus getting so hung up on all the syntax - mostly where to put the frickin' ()'s' and {}'s.  I am finding that with continued exposure and practice that the specifics are becoming more evident and I have realized that I can always look up syntax, but to know what I need to happen with in a program is far more important.


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

Will probably come up undefined as the function has not been called.

2. What is JSON? How does it relate to javascript objects?

It is a list of values within an object, for example, name, age, and other object characteristics. The values are all attached to the object and can then be used in other places within our program.

3. Describe a closure, what is it good for and how do you recognize one?

I had to look this up as I wasn't recognizing the name "closure,"  but once I did, I realized I knew exactly what this means. I was calling them nested variables. Closure is declaring the variables with-in the function so that that particular variable is not accessible outside of the function. Global variables can be manipulated and changed by other functions, but those that are within the function only relate to the given function.
