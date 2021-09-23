class TransactionsController < ApplicationController
  def create
    transaction = Transaction.new(transaction_params)
    if transaction.save
      if params[:transaction][:budget_id]
        Manifest.create(transaction_id: transaction.id, budget_id: params[:transaction][:budget_id]) 
      end
      render json: {
        status: :created,
        transaction: transaction,
        manifests: transaction.manifests
      }
    else 
      render json: { 
        status: 500,
        errors: transaction.errors.full_messages 
      }
    end
  end

  def update
    transaction = Transaction.find(params[:transaction][:id])
    if transaction.update(transaction_params)
      render json: { 
        status: :updated,
        transaction: transaction
      }
    else
      render json: { 
        status: 500,
        errors: transaction.errors.full_messages 
       }
    end
  end

  def destroy
    transaction = Transaction.find(params[:id])
    if transaction.destroy
      render json: { status: 200 }
    else
      render json: { 
        status: 500,
        errors: transaction.errors.full_messages 
      }
    end
  end

  def transaction_params
    params.require(:transaction).permit(:name, :account, :outflow, :inflow, :user_id)
  end
end