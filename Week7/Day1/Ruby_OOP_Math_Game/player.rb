class Player
    attr_reader :name
    attr_reader :hp
    attr_writer :hp
    def initialize(name)
        @name = name
        @hp = 3
    end
end