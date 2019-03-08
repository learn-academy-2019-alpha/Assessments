#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
p tempArray.map { |el| el * 2 }

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are
# particularly helpful and create examples to show how they work.

# your three built in ruby methods

# 1. gets (Collects an input from the user.)
a = gets

# 2. chomp (It deletes the \n after a user presses return to enter info on gets.)
a = gets.chomp

# 3. downcase (Changes all the letters of a string to lowercase letters.)
"hELLO".downcase # => "hello"

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if day == "Friday"
      puts "TGIF!"
    elsif day == "Monday"
      puts "Its monday again"
    else
      puts "another day"
  end
end
