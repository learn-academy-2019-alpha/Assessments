#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

arr = tempArray.map{ |el| el * 2}

p arr

#### 2. From all the built in Ruby methods we've seen in class this week,
# choose three that you think are particularly helpful and create examples to show how they work.
# - .map
 # (shown above)

# - .select
select = [1,2,3,4,5].select{|v| v == 3}
p select

# - .include?
tempArray = [1, 2, 6, 9, 3, 21]

p tempArray.include?(9)

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
#

class Example
  def initialize day
    @day = day
  end

  def say_hi day
    if day == "Friday"
      p "TGIF!"
    elsif day == "Monday"
      p "Its monday again"
    else
      p "another day"
    end
  end
end

new_example = Example.new("")
new_example.say_hi("Friday")
