require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5"
puts "----------"

# Your code goes here ...
puts "Total revenue = #{Store.sum(:annual_revenue)}"
puts "Average revenue = #{Store.sum(:annual_revenue)/Store.count}"

@big_stores = Store.where("annual_revenue > 1000000")
@big_stores.each do |store|
    puts ">>> Big store: #{store.name}, with annual revenue #{store.annual_revenue}"
end

puts "number of store annual revenue > 1M: #{Store.where("annual_revenue > 1000000").size}"