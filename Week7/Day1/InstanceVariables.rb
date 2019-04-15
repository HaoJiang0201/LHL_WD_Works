class Person
    attr_reader :name
    attr_writer :name
    def initialize(name)
        @name = name
    end
    # def getName
    #     @name
    # end
    # def setName(newName)
    #     @name = newName
    # end
end

p = Person.new('Polatouche')
puts p.name
p.name = "Ruby"
puts p.name