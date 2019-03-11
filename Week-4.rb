#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

p tempArray.map{ |element| element*2}

# your ruby loop here

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
puts "hello enter ur name"
gets.chomp.capitalize.reverse

gets.chomp (two in one really) i thinks is one of the most important because it creates the interactive data collecting aspect to ruby, the other two were just
the first ones i really thought of to use. i think map or select are also super important.

.reverse
.capatilize
gets.chomp

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

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

  def day=day
    @day=day
  end
end
  def say_hi
    if day == "Friday"
      p "TGIF!"
    elsif day == "Monday"
      p "Its monday again"
    else
      p "another day"
  end
end
say_hi"Thursday"
say_hi"Friday"
