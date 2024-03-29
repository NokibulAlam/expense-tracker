import React, { useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 18),
  },
  {
    id: 'e3',
    title: 'Food',
    amount: 999,
    date: new Date(2020, 3, 30),
  }, 
  {
    id: 'e4',
    title: 'Tution Fees',
    amount: 1800,
    date: new Date(2019, 5, 16),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => { 
      return [expense, ...prevExpenses]
    });
  };

  
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
