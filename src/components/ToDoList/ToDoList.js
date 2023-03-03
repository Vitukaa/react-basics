import { useState } from "react"
import './ToDoList.css'

const ToDoList = () => {
    const [input, setInput] = useState('')
    const [descriptionInput, setDesciptionInput] = useState('')
    const [list, setList] = useState([])

    const inputHandler = (event) => {
        setInput(event.target.value)
    }


    const descriptionInputHandler = (event) => {
        setDesciptionInput(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()

        const newTaskItem = {
            id: Math.random(),
            title: input,
            description: descriptionInput,
            done: false,
        }

        setList((prevState) => [...prevState, newTaskItem])
        setInput('')
        setDesciptionInput('')
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
            <div className='form-control'>
                <label htmlFor='task'>Task:</label>
                <input type='text' name='task' value={input} onChange={inputHandler}></input>
            </div>
            <div className='form-control'>
                <label htmlFor='task-description'>Task description:</label>
                <textarea name='task-description' value={descriptionInput} onChange={descriptionInputHandler}></textarea>
            </div>
            
            <input type='submit' value='Add to list' disabled={!input || !descriptionInput}></input>
        </form>

        <div className='tasks-wrapper'>
            {list && list.length > 0 ? (
                <>
                    <h2>To Do list:</h2>
                    <ul>
                        {list.map((item, index) => 
                            <li key={index} onClick={() => isDoneHandler(item.id)}>
                                <div className='task-wrapper'>
                                    <h4 className={item.done ? 'task-done' : 'task'}>{item.title}</h4>
                                    {!item.done && <p>Desciption: {item.description}</p>}
                                    <button onClick={() => deleteHandler(item.id)}>X</button>
                                </div>
                            </li>
                        )}
                    </ul>
                </>
            ) : (
                <h2>No tasks added.</h2>
            )}
        </div>
    </>
  )
}

export default ToDoList