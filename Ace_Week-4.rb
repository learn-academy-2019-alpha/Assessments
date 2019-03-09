#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
p tempArray.map { |n| n * 2 }

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
.include? , .select , .chomp
# your three built in ruby methods

p tempArray.include?(3) #loops the array and searches for the number 3 and return a boolean regarding whether or not it exists within the array.

p tempArray.select { |n| n % 2 == 0} #similar to the .filter() method in JavaScript. Loops the array and returns the values that meet the select criteria.

name = gets.chomp #Takes off the empty value after user input within the terminal.

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

class Example
  attr_reader :day

  def initialize day
    @day= day
  end

  def say_hi
    if @day == "Friday"
      p "TGIF!"
    elsif @day == "Monday"
      p "Its monday again"
    else
      p "another day"
    end
  end

end

a_day = Example.new("Friday")
a_day.say_hi
