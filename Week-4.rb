#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

tempArray.each {|el| p el * 2 }

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

attr_accessor
attr_writer
att_reader

# your three built in ruby methods

class Person
  attr_accessor :name
end

person = Person.new
person.name = "Gabe"


class Person
  attr_reader :name
  attr_writer :name
end



#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(day == "Friday")
      puts "TGIF!"


    elsif(day == "Monday")
      puts "Its monday again"

    else
      puts "another day"
  end
end
```
