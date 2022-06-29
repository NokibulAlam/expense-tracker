import Expenses from "./components/Expenses";


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2020, 5, 18),
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
      date: new Date(2020, 5, 16),
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
