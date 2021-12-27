import logo from "./logo.svg";
import "./App.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Candy Bar", price: 2.49, qty: 1 },
  { id: 2, name: "Apple", price: 0.98, qty: 2 },
  { id: 3, name: "Soft Drink", price: 1.89, qty: 2 },
];

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
