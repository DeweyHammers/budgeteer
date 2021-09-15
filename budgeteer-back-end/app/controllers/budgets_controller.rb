class BudgetsController < ApplicationController
  def create
    budget = Budget.new(budget_params)
    if budget.save
      render json: {
        status: :created,
        budget: budget
      }
    else 
      render json: { status: 500 }
    end
  end

  def destroy
    budget = Budget.find_by(id: params[:id])
    budget.destroy
  end

  def budget_params
    params.require(:budget).permit(:name, :category, :cost_per_month, :assign_money, :user_id)
  end
end