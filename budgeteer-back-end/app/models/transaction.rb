class Transaction < ApplicationRecord
  belongs_to :user
  has_many :manifests
  has_many :budget, through: :manifests
end
