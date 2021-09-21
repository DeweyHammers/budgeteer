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
      render json: { status: 500 }
    end
  end

  def transaction_params
    params.require(:transaction).permit(:name, :account, :outflow, :inflow, :user_id)
  end
end