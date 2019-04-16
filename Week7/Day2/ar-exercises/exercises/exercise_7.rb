require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'
require_relative './exercise_6'

puts "Exercise 7"
puts "----------"

# Your code goes here ...

# puts @store2.employees.create(first_name: "Khurram", last_name: "Virani", hourly_rate: 60).errors.details[:hourly_rate]
employeeNew = @store2.employees.create(hourly_rate: 30)
if(!employeeNew.valid?)
    puts
    puts "Create Employee Error: "
    employeeNew.errors.messages.each do |key, value|
        puts "#{key}: #{value}"
    end
    puts
end

# Employee.new
# @store2.employees = Employee.new
# @store2.employees.first_name = "Khurram"
# @store2.employees.last_name = "Virani"
# @store2.employees.hourly_rate = 60
# @store2.employees.save

puts "Input a new store's name:"
newName = gets.chomp

storeNew = Store.create(name:newName, annual_revenue: -1, mens_apparel: false, womens_apparel: false)
if(!storeNew.valid?)
    puts
    puts "Create Store Error: "
    storeNew.errors.messages.each do |key, value|
        puts "#{key}: #{value}"
    end
    puts
end