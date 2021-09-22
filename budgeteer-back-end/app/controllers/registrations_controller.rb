class RegistrationsController < ApplicationController
  def create
    user = User.new(
      username: params['user']['username'],
      email: params['user']['email'], 
      password: params['user']['password'], 
      password_confirmation: params['user']['password_confirmation'])
    user.assign_money = 0
    if user.save
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: { id: user.id, username: user.username, email: user.email, assign_money: user.assign_money }
      }
    else
      render json: { status: 500 }
    end
  end
end