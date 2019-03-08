# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method is like a function in JavaScript. Methods can we inherited through classes.

After googling:
The difference between functions and methods: methods don't need paranthesis; they don't use brackets, instead they use a do and end statement.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
Classes can take in methods and other information from parent class methods. All information comes down the chain and should not go back up. It works the same as extend in JavaScript. This is an example of how you would extend from a child to a parent 'Child < Parent'.


[Googled Answer]

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

Rspec is the testing capability for Ruby.
Tests can be written in the same folder, but different file from what is being tested.

This is what a test would look like in RSpec.

require 'rspec'
require_relative '____'

describe "____" do
  it "describtion of test" do
    expect(input for test).attribute Result
  end



//Googled Answer

RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications.

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer


//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
It's passing the variable into the string. It's used for string interpolation

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer

I can see the advantage of testing. Right now, it's difficult to see the benefits without doing it on actual code that we produce.

//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Inheretence variable can be used in sub-classes.

//Googled Answer
Local variables cannot be inhereted

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby

Ruby has high transportabillity
The language is named after a the inventor's colleague's birthstone
You can use ruby to write servers
