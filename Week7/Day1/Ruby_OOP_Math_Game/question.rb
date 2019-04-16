class Question
    attr_reader :result
    def initialize()
        # @num1 = 0
        # @num2 = 0
        # @compute = 0
        @result = 0
    end
    def generateQuestion()
        num1 = rand 1..9
        questionString = ""
        num2 = rand 1..10
        compute = rand 1..3
        case compute
        when 1
            questionString = "#{num1} + #{num2} = ?"
            @result = num1 + num2
        when 2
            questionString = "#{num1} - #{num2} = ?"
            @result = num1 - num2
        when 3
            questionString = "#{num1} * #{num2} = ?"
            @result = num1 * num2
        when 4
            questionString = "#{num1} / #{num2} = ?"
            @result = num1 / num2
        end
        return questionString
    end
    def getResult(answer)
        # puts "answer = #{answer}, result = #{@result}"
        if answer.to_i == @result
            return true
        else
            return false
        end
    end
end