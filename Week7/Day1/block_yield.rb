# def print_result
#     result_from_block = yield
#     puts result_from_block
# end
# This will print out the number 9 to the console
# print_result { 3 * 3 }
# print_result({3 * 3})

# Blocks can also be written using the do...end format
# print_result do
#     creature = "walrus"
#     "I am the #{creature}!"
# end

# print_result do
#     3*4
# end

# Check this out: blocks have access to variables outside of their definition
# shopping_list = [:milk, :eggs, :cheese]
# print_result do
#   # select one at random
#   important_item = shopping_list.sample
#   "I hope I don't forget #{important_item}!"
# end

# def print_result(&block)
#     result_from_block = block.call()
#     puts result_from_block
# end


class Person 
    def initialize( user ) 
         @test = user
    end

    def do_with_name 
        yield( @test ) 
    end
end

person = Person.new("Pola")
#invoking the method passing a block
person.do_with_name do |hj|
    puts "Hey, his name is #{hj}"
end

#variable to hold the name reversed
reversed_name = ""

#invoke the method passing a different block
test = person.do_with_name do |name| 
    reversed_name = name.reverse
end

puts test
