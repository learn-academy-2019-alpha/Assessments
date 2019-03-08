# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?


#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

You're able to use data and actions in the parent class and pass it to their child in which they are able to use what is written inside the parent.

eg:
class Vehicle - the parent
Car < Vehicle - the child is taking in the parents actions and code
Toyota < Car - the child is taking in car's actions and code which is stemming off of the parent

[Googled Answer]

didnt feel like i needed to google it as i understand

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer

rspec is how you test your ruby code.
You want to always write your test in a name_spec.rb file which then runs the code in the name.rb file to make sure it passes the tests and runs correctly.

You write first the describe to describe what is going to be tested, then you write what you want it to do, and then you write the expected outcome.

//Googled Answer
rspec is also a BDD

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

//Googled Answer
So i googled what non- inheritance relationships and didn't really see anything able to define what that is so i'm a little confused on what the question means and what answer you're really looking for.

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

that is a string interpolation in which it takes the value and allows you to use it in one string rather than using multiple " " and +'s to combine it all into one string.


#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I feel good about testing. I just have to get use to doing the whole my_name = Name.new and just making sure I cover all the possible loop holes my code could have.

I definitely will just have to practice it more and more to really get a hang of it.
//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Instance is a variable that can be accessed everywhere.

local variables are only accessed to that file and cannot be accessed by other files.
//Googled Answer

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.


IRB being used as a calculator is really cool and didn't know it could be used like that.
Im surprised by how much math is put into ruby like finding a square root and also sin() and tan()

"__FILE__ is the magic variable that contains the name of the current file. $0 is the name of the file used to start the program. This check says “If this is the main file being used…” This allows a file to be used as a library, and not to execute code in that context, but if the file is being used as an executable, then execute that code."

^^ that is really interesting that you're able to let it become a library rather than letting it run. 
