# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
-  Methods are simply a set of instructions saying what an object should do in response to a particular message. Unlike JavaScript, Ruby methods have to be defined, when defining methods with variables within them, those variables stay local to just that method, and methods can also take parameters.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

[Your Answer]
- inheritance is a relationships between classes which allow child classes to inherit the external features of the superclasses.

[Googled Answer]
-  Class inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer - it is a way of testing if ruby code run. Behaviors driven development which test for behaviors.

//Googled Answer - RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer - instance variable, a specific attribute and behavior

//Googled Answer - couldn't find any clear answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
- #{} are called hash used in string interpolation to attach a variable to a string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer - I feel okay about it but I need more practice. Some of the potential pros about BBD testing is that tests are written in a way that describes the desired behavior not state specific requirements on how tests are written. The way it is written is not easily understood.

//Googled Answer- BDD forces you to take a step back and look at the application from the end user’s perspective. Another great thing about BBD is that documentation is built in. Also, both BDD and test-driven development (TDD) allow you to refactor code really well. BDD provides us some advantages, however it also gives us obstacles. The big one is the question of test data while we apply BDD.

#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer - instance variable are variable that start with @ that is available within only the object scope. Local variable are variable that exist and accessed within the block of code they exist in.

//Googled Answer - An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. whlie Local variables are local to the code construct in which they are declared.

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

I used Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

-Ruby has a great math operators that includes the power of and the square root of a number.
-In Ruby is it easy to do many things with methods. We just have to define it using def and end. if we want the output we can just call it.
- string Interpolation is easy by just using quotation mark and hash.
- using class we can create many great things. we can create an instance variable, and is available to all the methods of the class so we can make them do what we like.
-Ruby uses the good object-oriented approach of keeping data sort-of hidden away. For example instances variable are hidden away inside the object.
- In ruby if we don't want to include methods from the parent class we can just pass it the parameter false, meaning we don’t want methods defined by parent.
-Ruby provides an easy way of providing access to an object’s variables.
-In Ruby, you can open a class up again and modify it. The changes will be present in any new objects you create and even available in existing objects of that class.
-Ruby allow to iteration over objects using built in methods like .each .
