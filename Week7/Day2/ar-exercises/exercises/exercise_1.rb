require_relative '../setup'

puts "Exercise 1"
puts "----------"

# Your code goes below here ...

store1 = Store.create(name: "Burnaby", annual_revenue: 300000, mens_apparel: true, womens_apparel: true)
puts "Burnaby added to the db..."

store2 = Store.new
store2.name = "Richmond"
store2.annual_revenue = 1260000
store2.mens_apparel = false
store2.womens_apparel = true
store2.save
puts "Richmond added to the db..."

store3 = Store.create(name: "Gastown", annual_revenue: 190000, mens_apparel: true, womens_apparel: false)
puts "Gastown added to the db..."

puts "Totally #{Store.count} stores in the db..."
