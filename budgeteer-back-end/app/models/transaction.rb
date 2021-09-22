class Transaction < ApplicationRecord
  belongs_to :user
  has_many :manifests, dependent: :delete_all
  has_many :budget, through: :manifests
end
