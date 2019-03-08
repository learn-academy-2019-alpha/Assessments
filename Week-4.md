# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method in Ruby is essentially a function that runs code that is defined within itself. They are basically the same thing.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]

Ruby inheritance allows classes to use information from another class. Think of it as you borrowing a lawnmower from your neighbor. You're obligated to do so, because you don't own a lawnmower. But since your neighbor owns one, you can borrow their lawnmower. You don't own the lawnmower but you're still able to use it. That is ruby inheritance.

[Googled Answer]

Inheritance provides the concept of “reusability”, i.e. If a programmer wants to create a new class and there is a class that already includes some of the code that programmer wants, then he or she can derive a new class from the existing class. By doing this, it increases the reuse of the fields and methods of the existing class without creating extra code.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

Rspec is testing in Ruby. The general process for writing Rspec tests is to describe what you're testing, telling it what you want it to do in string format, and write out your expectation after the test runs the expectation code.

//Googled Answer

Rspec is a unit test framework for the Ruby programming language. It is indeed a behavior driven development tool since the tests focuses on the “behavior” of the application instead on how it works. It gives emphasis on how the application behaves instead of how it works.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

I'm struggling to understand what the question is asking when asking for "non" inheritance relationships. Even after Googling, I found it difficult to find an answer online. To my knowledge, all Ruby objects have the ability to initialize and have their own methods but I don't think that is what the question is looking for.

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

That is Ruby's version of string interpolation. It is allowing us to plug in a value to our string without having to combine multiple strings together using a plus sign.

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

I feel really good about testing. The obvious benefit of testing is that it gets you to code better before you actually start coding. You're testing each aspect of your program, piece by piece, to make sure it works. Refactoring is needed later on, but testing allows us to test it every time we refactor to make sure nothing is broken.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer

An instance variable is a variable that is available anywhere in the program. A local variable has restricted usage to the class or file it is defined within.

//Googled Answer

An instance variable has a name beginning with @, and its scope is confined to whatever object self refers to.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

- IRB comes with a built in calculator that can be used in Terminal.
- Just like Javascript, Math is a built-in module for mathematics.
- Instance variables are hidden within an object and can be revealed by inspecting the object itself.
