class User < ApplicationRecord
  has_many :budgets, dependent: :delete_all
  has_many :transactions, dependent: :delete_all
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
