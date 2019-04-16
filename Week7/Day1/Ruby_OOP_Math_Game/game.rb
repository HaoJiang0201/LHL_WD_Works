require './question'
require './player'

class Game
    def initialize(player1, player2)
        @currentPlayer = 2
        @player1 = player1
        @player2 = player2
        @question
    end
    def newRound(question)
        @question = question
        questionString = @question.generateQuestion
        if @currentPlayer == 1
            puts "#{@player2.name} : #{questionString}"
            @currentPlayer = 2
        else
            puts "#{@player1.name} : #{questionString}"
            @currentPlayer = 1
        end
    end
    def newScore(answer)
        if @question.getResult(answer)
            if @currentPlayer == 1
                @player1.hp = @player1.hp + 1
                @player2.hp = @player2.hp - 1
            else
                @player2.hp = @player2.hp + 1
                @player1.hp = @player1.hp - 1
            end
        else
            if @currentPlayer == 1
                @player1.hp = @player1.hp - 1
                @player2.hp = @player2.hp + 1
            else
                @player2.hp = @player2.hp - 1
                @player1.hp = @player1.hp + 1
            end
        end
        if @player1.hp > 3
            @player1.hp = 3
        end
        if @player2.hp > 3
            @player2.hp = 3
        end
        puts ">>> #{@player1.name} #{@player1.hp}/3 vs #{@player2.name} #{@player2.hp}/3"
    end
    def getStatus
        # puts "@player1.hp = #{@player1.hp}, @player2.hp = #{@player2.hp}"
        if @player1.hp > 0 && @player2.hp > 0
            # puts "Game Continue ..."
            return true
        else
            if @player1.hp > @player2.hp
                puts "#{@player1.name} won, Congratulation!"
            else
                puts "#{@player2.name} won, Congratulation!"
            end
            return false
        end
    end
end