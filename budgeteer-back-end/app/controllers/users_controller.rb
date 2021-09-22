class UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: { 
        status: :updated,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end

  def user_params
    params.require(:user).permit(:name, :email, :assign_money)
  end
end