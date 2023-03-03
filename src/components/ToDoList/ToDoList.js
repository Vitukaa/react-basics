import { useState } from "react"
import './ToDoList.css'

const ToDoList = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newTaskItem = {
            id: Math.random(),
            title: input,
            done: false,
        }

        setList((prevState) => [...prevState, newTaskItem])
        setInput('')
    }

    const deleteHandler = (id) => {
        setList(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    }

    const isDoneHandler = (id) => {
        setList(prevState => {
            const updatedList = prevState.map(item => {
                if (item.id === id) {
                    const itemToUpdate = {...item}
                    itemToUpdate.done = !item.done
                    // const itemToUpdate = {...item, !item.done}

                    return itemToUpdate
                }
                return item
            })
            return updatedList
        })

    }




  return (
    <>
    <form onSubmit={submitHandler}>
        <label htmlFor='task'>Task:</label>
        <input type='text' name='task' value={input} onChange={inputHandler}></input>
        <input type='submit' value='Add to list' ></input>
    </form>
    <h2>To Do list:</h2>
    <ul>
        {(list && list.length > 0) &&
            list.map((item, index) => 
            <li key={index} onClick={() => isDoneHandler(item.id)}>
                <span className={item.done ? 'task-done' : 'task'}>{item.title}</span>
                <button onClick={() => deleteHandler(item.id)}>X</button>
            </li>)
        }
    </ul>
    
    </>
  )
}

export default ToDoList