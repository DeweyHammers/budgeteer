class Budget < ApplicationRecord
  belongs_to :user
  has_many :manifests, dependent: :delete_all
  has_many :translations, through: :manifests
end
