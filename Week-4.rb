#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
tempArray.map { |n| n * 2  }


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
a= gets.chomp -  gets allow user to input and chomp remove newline(\n)
5.to_s - change the datat type from a number to a string.
a.inclue? (5) - returns true if the given object is present

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class Example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(day == "Friday"){
      p "TGIF!"
    }
  elsif(day == "Monday"){
      p "Its monday again"
    }
    else
      p "another day"
  end
  end
end
```
