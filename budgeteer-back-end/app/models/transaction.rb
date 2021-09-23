class Transaction < ApplicationRecord
  belongs_to :user
  has_many :manifests, dependent: :delete_all
  has_many :budget, through: :manifests
  validates :name, presence: true
  validates :account, presence: true
  validates :outflow, presence: true
  validates :inflow, presence: true
end
