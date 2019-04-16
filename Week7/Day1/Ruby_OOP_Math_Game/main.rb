require './question'
require './player'
require './game'

puts ">>> Welcome to TwO-O-Players Math Game ..."

puts ">>> Please enter first player's name:"
player1 = Player.new(gets.chomp)
puts ">>> Please enter second player's name:"
player2 = Player.new(gets.chomp)
puts ">>> #{player1.name} 3/3 vs #{player2.name} 3/3, let the game begin ..."

question = Question.new
game = Game.new(player1, player2)

while(game.getStatus)
    puts ">>> New Turn --------"
    game.newRound(question)
    game.newScore(gets.chomp)
end

puts "Game Over"