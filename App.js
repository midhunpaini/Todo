import React, {useState} from "react"
import ReactDOM from "react-dom"


import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [completedItems, setCompletedItems] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    console.log(...items)
    const newItems = [...items, { text, completed: false }];    
    setItems(newItems);
    setText('');
  };

  const handleCheckboxChange = (index) => {
    const newItems = [...items];
    const completedItem = newItems.splice(index, 1)[0];
    completedItem.completed = true;
    setItems(newItems);
    setCompletedItems([...completedItems, completedItem]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <h2>Uncompleted Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Items</h2>
        <ul>
          {completedItems.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={true} disabled />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




const Title = () => (
    <h1>Todo list</h1>
)
 
const Body = () => (
    <TodoList/>
)

const AppLayout = () => {
    return (
      <>
        <Title />
        <Body />
      </>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)