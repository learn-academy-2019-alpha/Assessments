# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

Methods are very similar to functions in javascript, but syntax is different.


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
 Class inherits is traits for a class that get passed down to other classes


[Googled Answer]
Inheritance allows the programmer to inherit the characteristics of one class into another class. Ruby supports only single class inheritance, it does not support multiple class inheritance but it supports mixins.


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer rspec is a way to rest in ruby. The general purpose is to test your code to write code more efficently

//Googled Answer
 RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. Even though it has a very rich and powerful DSL (domain-specific language), at its core it is a simple tool which you can start using rather quickly


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer ???

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

ruby
x = 1022
puts "I am printing a random number #{x}"

#{} is string interpolation, is pulling the variable and entering into the string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer Feeling decent, will need more practice but the challenges went well today. Some pros would be testing your code and getting descriptive error descriptions. Cons it take a little bit

//Googled Answer Pros

Test controller actions
Fast
Cons

No longer recommended by Rspec
Some methods now deprecated (assignsand assert_template)
Doesn’t test entire stack


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer a variable in ruby is similar to javascipt but you down have to use var, let const and each variable only acts locally in ruby

//Googled Answer 31

A normal variable has scope only within the current context; an instance variable has scope throughout one instance of a class. In your case they're confused because the context is main, which acts as an instance of Object.



#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.

these are some keyword in Ruby:
alias   and     BEGIN   begin   break   case    class   def     defined
do      else    elsif   END     end     ensure  false   for     if
in      module  next    nil     not     or      redo    rescue  retry
return  self    super   then    true    undef   unless  until   when
while   yield
