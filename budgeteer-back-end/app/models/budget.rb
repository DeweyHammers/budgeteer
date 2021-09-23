class Budget < ApplicationRecord
  belongs_to :user
  has_many :manifests, dependent: :delete_all
  has_many :translations, through: :manifests
  validates :name, presence: true
  validates :category, presence: true
  validates :amount, presence: true
  validates :cost_per_month, presence: true
  validates :assign_money, presence: true
end
