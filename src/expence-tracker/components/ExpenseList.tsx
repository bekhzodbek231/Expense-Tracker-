import React from "react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <th>{expense.description}</th>
            <th>{expense.amount}</th>
            <th>{expense.category}</th>
            <th>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>
            ${expenses.reduce((acc, cu) => cu.amount + acc, 0).toFixed(2)}
          </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
