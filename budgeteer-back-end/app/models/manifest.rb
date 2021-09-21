class Manifest < ApplicationRecord
  belongs_to :owner, foreign_key: "transaction_id", class_name: "Transaction"
  belongs_to :budget
end
