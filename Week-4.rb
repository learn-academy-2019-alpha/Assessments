# #### 1. Use Ruby to loop over this array, multiplying each element by 2.
#
tempArray = [1, 2, 6, 9, 3, 21]
tempArray.each do |e|
  puts e * 2
end
#
# #### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
# .each
# ex:
tempArray = [1, 2, 6, 9, 3, 21]
tempArray.each do |e|
  puts e * 2
end

.gets.chomps

x = .gets.chomp
"hello #{x}"

.includes?

x = "Jerrod"
x.includes? 'J'

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Day_Of_Week
  def initialize(day)
    @day = day
  end
end

  def say_hi(day)
    if(day == "Friday")
        "TGIF!"
    elsif(day == "Monday")
      "Its monday again"
    else
      "another day"
  end
end

p say_hi("Friday")
