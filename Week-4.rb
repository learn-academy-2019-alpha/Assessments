#### 1. Use two different Ruby loops to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.each do |element|
    puts element * 2
end

tempArray.map { |element| puts element * 2 }


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
name = 'Maria'
puts name.capitalize

numbers = [2, 4, 6, 8]

puts numbers.length

puts numbers.last


#### 3. Create a method that takes in a sentence and returns a new sentence with the first letter of each word capitalized.

sentence = "hello there, how are you?"
expected output = "Hello There, How Are You?"

def capitalize (sentence)
    sentence.split('')
    sentence.map {|word| word.capitalize }
    puts sentence.join('')
end

#### 4.  Create a method that takes in a string and returns a new string with all the vowels removed. HINT:  there's a built in string method for this

no_vowels = "I have no vowels"
expected output = " hv n vwls"

def remove_vowels (no_vowels)
    puts no_vowels.delete "aeiou"
end


#### 5. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end
  def Say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elseif(day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```
class Example
  def initialize(day)
    @day=day
  end
  def Say_hi
    if(@day == "Friday"){
      puts "TGIF!"
    }
    elseif(@day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
#### 6a.  Create a class called Animal that initializes with a color.  Create a method in the class called legs that returns 4.

# your class here
class Animal
    def initialze(color)
        @color = color
    end

    def color
        @color
    end

    def legs
        puts "has 4 legs"
    end
end

#### 6b.  Create a new instance of an Animal with a brown color.  Return how many legs the animal has.
brown_animal = Animal.new("Brown")
brown_animal.color
brown_animal.legs
