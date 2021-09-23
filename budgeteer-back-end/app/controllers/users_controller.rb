class UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: { 
        status: :updated,
        user: { id: user.id, username: user.username, email: user.email, assign_money: user.assign_money }
      }
    else
      render json: { 
        status: 500,
        errors: user.errors.full_messages 
      }
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.budgets.map { |budget| budget.destroy }
      user.transactions.map { |transaction| transaction.destroy }
      user.destroy
      reset_session
      render json: { status: 200 }
    else
      render json: { 
        status: 500,
        errors: user.errors.full_messages 
      }
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :assign_money)
  end
end