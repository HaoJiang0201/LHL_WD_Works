# def sayHello(name)
#   puts "Hello, #{name}"
# end
# sayHello("Hao Jiang")
# puts(">>>>>>>>>>")
# myArray = [5, 4, 3, 2, 1]
# myArray.sort
# puts(myArray)
# puts(">>>>>>>>>>")
# myArray.each{|word| puts word}

######## Name Spacing Practice ########
module HaoYuStudio
  FOUNDED_BY = "Howard Jiang"
end

puts HaoYuStudio
puts HaoYuStudio.class
puts HaoYuStudio::FOUNDED_BY