#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]
p tempArray.map{ |element| element*2 }


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

nums =[1,4,5,7,3,1,7,8]
p nums.last
# I like how easy Ruby language is, and it makes more sense to me.

p nums.map{ |element| element*3}
#I like how easy it is to use a block element within Ruby, and also how you can do it all within one line.

def even_num(num)
    num.each do |element|
    if(element %2 == 1)
        p element
        end
    end
end
even_num(nums)

##I also really enjoy the lack of syntax and instead of using brackets we use the word end. Also the .each loop is incredibly useful.

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day= day
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
end

p=Example.new("Friday")
p p.say_hi("Tuesday")
