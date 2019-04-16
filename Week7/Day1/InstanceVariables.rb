class Person
    attr_reader :name
    attr_writer :name
    def initialize(name)
        @name = name
    end
end

p = Person.new('Polatouche')
puts p.name
p.name = "Ruby"
puts p.name