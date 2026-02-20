import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './App.css'


function App() {
  
  const startItems = [
    { id: 0,
      name: "Melk",
      quantity: 2,
      purchased: false },

    { id: 1,
      name: "Egg",
      quantity: 1,
      purchased: true }
  ];

  
  const [items, setItems] = useState(startItems)
  const [item, setItem] = useState()

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm item={item} setItem={setItem} setItems={setItems} ></AddForm>
      <ShoppingList items={items} setItems={setItems} ></ShoppingList>
    </main>
  );
}



export default App