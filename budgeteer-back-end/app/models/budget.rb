class Budget < ApplicationRecord
  belongs_to :user
  has_many :manifests
  has_many :translations, through: :manifests
end
