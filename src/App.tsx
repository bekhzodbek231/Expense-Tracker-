import "./App.css";
import { useState } from "react";
import ExpenseList from "./expence-tracker/components/ExpenseList";
import ExpenseFilter from "./expence-tracker/components/ExpenseFilter";
import ExpenseForm from "./expence-tracker/components/ExpenseForm";
import categories from "./expence-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "gas", amount: 10, category: "Utilitiies" },
    { id: 2, description: "tomatoes", amount: 10, category: "Groceries" },
    { id: 3, description: "Wodka", amount: 240, category: "Club" },
  ]);

  const visibaleExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-2">
        <ExpenseFilter
          onSelectCategories={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibaleExpense}
        onDelete={(id) =>
          setExpense(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
