import { useState } from "react"
import Form from "./Form"
import ToDoItem from "./ToDoItem"
import './ToDoList.css'

const ToDoList = () => {
    const [input, setInput] = useState('')
    const [descriptionInput, setDesciptionInput] = useState('')
    const [date, setDate] = useState(new Date().toLocaleString())
    const [list, setList] = useState([])

    const inputHandler = (event) => {
        setInput(event.target.value)
    }


    const descriptionInputHandler = (event) => {
        setDesciptionInput(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()

        const newTaskItem = {
            id: Math.random(),
            title: input,
            description: descriptionInput,
            done: false,
            createDate: date,
        }

        setList((prevState) => [...prevState, newTaskItem])
        setInput('')
        setDesciptionInput('')
        setDate(new Date().toLocaleString())
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
        <Form onSubmit={submitHandler} input={input} onInput={inputHandler} descriptionInput={descriptionInput} onDescriptionInput={descriptionInputHandler} date={date} onDate={dateHandler} />

        <div className='tasks-wrapper'>
            {list && list.length > 0 ? (
                <>
                    <h2>To Do list:</h2>
                    <ul>
                        {list.map(item => <ToDoItem key={item.id} data={item} onIsDone={isDoneHandler} onDelete={deleteHandler}/>)}
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