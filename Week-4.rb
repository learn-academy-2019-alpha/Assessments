Carrie Johnson 
#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
p tempArray.map {|e| e * 2}
#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
a = gets - gets user input
a =gets.chomp - returns user input w/o new lines add
a =gets.chomp.downcase -lowercase your input
#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if day == "Friday"
      puts "TGIF!"

    elsif day == "Monday"
      puts "Its monday again"

    else
      puts "another day"
  end
end
