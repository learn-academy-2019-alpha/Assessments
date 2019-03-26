Week 4 Assessment
Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
    A method in Ruby is a set of instructions detailing what an object should do in response to a particular message. It is similar to how you would call a method in JavaScript in that you would use the "dot notation" by calling the name of the object followed by the dot, and then the name of the actual method. The difference between Ruby and JavaScript is that in Ruby, you start a method with the word "def" instead of "function" and you do not need to include parentheses after the name of the method, like you do in JavaScript. Also, you do not need to include a return statement in a Ruby method.

2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.
[Your Answer]
    When a class inherits from another class, it means that the inheriting class gets the behaviors, or methods, of the super class (parent class). The instance variables of the parent class are not inherited, they can only be accessed through the methods of the super class.

[Googled Answer]

3. What is rspec and what is the general process for writing tests in RSpec?
//Your Answer
    RSpec is a form of Test Driven Development in Ruby. The process for writing tests in RSpec is: determine a feature you want to implement, create separate testing blocks for those features, put your expectations in the blocks, run the tests to make sure that they fail once, then implement enough code to make the tests pass.

//Googled Answer

4. Name three possible non-inheritance relationships between ruby objects?
//Your Answer
    "Has-a" relationship: This means that an object can contain another object, but it does not inherit from that object.

//Googled Answer

5. What do we call the #{} convention used below? What is it accomplishing?
x = 1022
puts "I am printing a random number #{x}"
    That convention is called "string interpolation". It is displaying the initialized variable of "x" to the console.

6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?
//Your Answer
    I feel confident about testing. I believe that testing is a good way to rule out bugs or errors in your code. With TDD or BDD, you can test for specific outputs or behaviors that you want in your program. The only cons I can think of is that proper testing may take a while and may potentially distract you from building out your code fully.

//Googled Answer

7. What is an instance variable in Ruby? How is it different from a normal, local variable?
//Your Answer
    An instance variable in Ruby begins with the "@" symbol and it cannot be accessed from outside of an object. A local variable does not begin with the "@" symbol. A local variable is declared within a method and it cannot be accessed from outside of that method.

//Googled Answer

8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)
Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.
    I learned some very useful things about Ruby from those resources. I learned more about how to define and write methods in Ruby, for example. I also got some practice with Ruby string interpolation.
