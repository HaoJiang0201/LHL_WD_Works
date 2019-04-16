class Employee < ActiveRecord::Base
    belongs_to :store
    validates :first_name, presence: { message: "first_name cannot be empty" }
    validates :last_name, presence: { message: "last_name cannot be empty" }
    validates :hourly_rate, numericality: { greater_than_or_equal_to: 40, lesss_than_or_equal_to: 200, message: "must between[40, 200]" }
    # validate :hourly_rate_range
    # def hourly_rate_range
    #     if hourly_rate < 40
    #         errors.add(:hourly_rate, "cannot be below 40")
    #     elsif hourly_rate > 200
    #         errors.add(:hourly_rate, "cannot be above 200")
    #     end
    # end
end
