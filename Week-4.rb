#### 1. Use two different Ruby loops to loop over this array, multiplying each element by 2.

# tempArray = [1, 2, 6, 9, 3, 21]

# tempArray.each do |value|
#   p value * 2
# end

# tempArray.map{ |value| p value * 3}

# your ruby loop here


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# arr = [1,2,3,4,5,6]

#good to know that you have to add each_with_index when using map and select with index
# arr.each_with_index.select{ |value, index|
#   if index % 2 == 0
#     p value
#   end
# }
#
# p rand(1...10)
#
# p /hello/.match('hello, how are you')



#### 3. Create a method that takes in a sentence and returns a new sentence with the first letter of each word capitalized.

test = "hello there, how are you?"
def capi stri
   stri.split(' ').map{ |value| p value.capitalize}.join(' ')
end

p capi(test)

# sentence = "hello there, how are you?"
# expected output = "Hello There, How Are You?"

#### 4.  Create a method that takes in a string and returns a new string with all the vowels removed. HINT:  there's a built in string method for this



# no_vowels = "I have no vowels"
# expected output = " hv n vwls"

# p no_vowels.delete('aeiou')


#### 5. Look at this horrible ruby code, and fix it to be good ruby code.
#
# ``` ruby
class Example
  attr_accessor :day

  def initialize day
    @day = day
  end

  def say_hi
    if @day == "Friday"
      puts "TGIF!"
    elsif @day == "Monday"
      puts "Its monday again"
    else
      puts "another day"
    end
  end
end

new_example = Example.new('Friday')
new_example.say_hi

# ```
#### 6a.  Create a class called Animal that initializes with a color.  Create a method in the class called legs that returns 4.

class Animal
  attr_accessor :color

  def initialize color
    @color = color
  end

  def legs
    p 4
  end

end

new_animal = Animal.new('green')
new_animal.legs

#### 6b.  Create a new instance of an Animal with a brown color.  Return how many legs the animal has.



brown_animal = Animal.new('brown')
brown_animal.legs
