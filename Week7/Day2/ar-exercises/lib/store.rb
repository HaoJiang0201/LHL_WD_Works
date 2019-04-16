class Store < ActiveRecord::Base
    has_many :employees
    validates :name, presence: { message: "must has a name" }
    validates :name, length: { minimum: 3, message: "no less than 3 characters" }
    validates :annual_revenue, numericality: { greater_than_or_equal_to: 0, only_integer: true, message: "must be a positive integer" }
    validate :must_carry_mens_or_womens_apparel
    def must_carry_mens_or_womens_apparel
        if !mens_apparel && !womens_apparel
            errors.add(:mens_apparel, "the store must be men's or women's apparel")
            errors.add(:womens_apparel, "the store must be men's or women's apparel")
        end 
        # errors.add(:womens_apparel, "the store must be men's or women's apparel") unless womens_apparel
    end
end
