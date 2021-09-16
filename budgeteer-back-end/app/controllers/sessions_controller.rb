class SessionsController < ApplicationController
  include CurrentUserConcern
  
  def create
    user = User.find_by(username: params["user"]["username"]).try(:authenticate, params["user"]["password"])
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: { id: user.id, username: user.username, email: user.email },
        budget: user.budgets
      }
    else 
      render json: { 
        status: 401 
      }
    end
  end

  def logged_in
    if @current_user
      render json: { 
        logged_in: true,
        user: { id: @current_user.id, username: @current_user.username, email: @current_user.email },
        budget: @current_user.budgets
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