# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?
Jess - ruby methods are like js functions. js has functions and methods. ruby has only methods.

Googled
Ruby methods are very similar to functions in any other programming language. Ruby methods are used to bundle one or more repeatable statements into a single unit.

Method names should begin with a lowercase letter. If you begin a method name with an uppercase letter, Ruby might think that it is a constant and hence can parse the call incorrectly.

Methods should be defined before calling them, otherwise Ruby will raise an exception for undefined method invoking.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]
there is a parent class, probably most generic and more abstract. the sub class or child class gets more specific, but has access to all parent attributes and behaviors

[Googled Answer]
Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own. If all mammals breathe, then all cats breathe. In Ruby, a class can only inherit from a single other class. Some other languages support multiple inheritance, a feature that allows classes to inherit features from multiple classes, but Ruby doesn't support this.

#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is a framework for testing ruby code.. behavior driven development
//Googled Answer
RSpec is a 'Domain Specific Language' testing tool written in Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in the production applications

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
honestly wasnt sure what this question was asking or what the answer might be:)
//Googled Answer
belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many

#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

string interpolation. the value of x, in this case, 1022, will appear in terminal in place of #{}. double quotes required.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
i like testing, but dont feel confident applying it to anything that requires logic (conditionals, loop, etc). i do feel like i understood the language of jest more than rspec... but id also say i feel more comfortable with js than ruby, so rspec testing discomfort is a possible biproduct of that.
//Googled Answer


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
instance variable is specific to that class and only available to objects from that class

//Googled Answer
A local variable that is defined inside one method, for example, cannot be accessed by another method. In order to get around this limitation, we can use instance variables inside our Ruby classes. An instance variable is a variable that is accessible in any instance method in a particular instance of a class.
#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.
- not from this tutorial, but i didnt realize all input from gets was a string and that integers would always require a .to_i ... found that interesting this week
- feels like everything is easier in ruby. finishing the js objects lesson and trying to sort based on class name was impossible. so easy in ruby... class.name made my night on thursday.
- 
