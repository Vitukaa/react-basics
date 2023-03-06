import { useState } from 'react'
import FormShoppingListPage from './FormShoppingListPage';
import ListItemShoppingListPage from './ListItemShoppingListPage';
import './ShoppingListPage.css'

export default function ShoppingListPage() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
  
    const submitHandler = event => {
      event.preventDefault();
      
      const newShoppingItem = {
        id: Math.random(),
        title: input,
        done: false,
      }
      
      setList(prevState => [newShoppingItem, ...prevState]);
      setInput('');
    }
  
    const inputHandler = event => setInput(event.target.value);
    const deleteHandler = id => setList(prevState => prevState.filter(item => item.id !== id));
  
    const doneHandler = id => {
      setList(prevState => {
        const updatedList = prevState.map((item) => {
          if (item.id === id) {
            const itemToUpdate = {...item};
            itemToUpdate.done = !item.done;
  
            // const itemToUpdate = { ...item, done: !item.done };
  
            return itemToUpdate;
          }
  
          return item;
        });
  
        return updatedList;
      })
    }

    return (
      <div>
        <FormShoppingListPage onSubmit={submitHandler} input={input} onInput={inputHandler} />

        <div className="shopping-list-wrapper">
          {list && list.length > 0 ? (
            <>
              <h2>Shopping List:</h2>

              <ul>
                {list.map((item, index) => (
                  <ListItemShoppingListPage key={index} onDone={doneHandler} item={item} onDelete={deleteHandler}/>
                ))}
              </ul>
            </>
          ) : (
            <h2>No shopping items...</h2>
          )}
        </div>
      </div>
    )
}