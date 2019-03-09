#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

p tempArray.map { |element | element * 2 }
#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
# sort
# uniq
# reduce
array = [1, 2, 6, 9, 3, 21, 23, 47, 101, 2, 4, 7, 247]
p array.sort
# [1, 2, 2, 3, 4, 6, 7, 9, 21, 23, 47, 101, 247]
p array.uniq
# [1, 2, 6, 9, 3, 21, 23, 47, 101, 4, 7, 247]
p array.reduce(:+)
# 473

# your three built in ruby methods

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class Example
  def initialize day
    @day=day
  end

  def say_hi
    if @day == "Friday"
      "TGIF!"
    elsif @day == "Monday"
      "Its monday again"
    else
      "another day"
    end
  end
end
```
