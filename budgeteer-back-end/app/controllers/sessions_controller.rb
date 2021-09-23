class SessionsController < ApplicationController
  include CurrentUserConcern
  
  def create
    user = User.find_by(username: params["user"]["username"]).try(:authenticate, params["user"]["password"])
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: { id: user.id, username: user.username, email: user.email, assign_money: user.assign_money },
        budgets: user.budgets,
        transactions: user.transactions.map { |transaction| { transaction: transaction, manifests: transaction.manifests} },
      }
    else 
      render json: { 
        status: 401,
        errors: 'User name or password is incorrect or invalid'
      }
    end
  end

  def logged_in
    if @current_user
      render json: { 
        logged_in: true,
        user: { id: @current_user.id, username: @current_user.username, email: @current_user.email, assign_money: @current_user.assign_money },
        budgets: @current_user.budgets,
        transactions: @current_user.transactions.map { |transaction| { transaction: transaction, manifests: transaction.manifests} },
      }
    else
      render json: {
        logged_in: false,
      }
    end
  end

  def logout
    reset_session
    render json: { 
      status: 200, 
      logged_in: true 
    }
  end
end