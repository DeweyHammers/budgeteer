class BudgetsController < ApplicationController
  def create
    budget = Budget.new(budget_params)
    if budget.save
      render json: {
        status: :created,
        budget: budget 
      }
    else 
      render json: { 
        status: 500,
        errors: budget.errors.full_messages 
      }
    end
  end

  def update
    budget = Budget.find_by(id: params[:id])
    if budget.update(budget_params)
      render json: { 
        status: :updated,
        budget: budget
      }
    else
      render json: { 
      status: 500,
      errors: budget.errors.full_messages 
      }
    end
  end

  def destroy
    budget = Budget.find_by(id: params[:id])
    if budget.destroy 
      render json: { status: 200 }
    else
      render json: { 
        status: 500,
        errors: budget.errors.full_messages 
      }
    end
  end

  def budget_params
    params.require(:budget).permit(:name, :amount, :category, :cost_per_month, :assign_money, :user_id)
  end
end