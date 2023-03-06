import React from 'react'

export default function Form(props) {
    const { onSubmit, input, onInput, descriptionInput, onDescriptionInput, date, onDate } = props
  return (
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='task'>Task title:</label>
            <input type='text' name='task' value={input} onChange={onInput}></input>
        </div>
        <div className='form-control'>
            <label htmlFor='task-description'>Task description:</label>
            <textarea name='task-description' value={descriptionInput} onChange={onDescriptionInput}></textarea>
        </div>
        <div className='form-control'>
            <label htmlFor='task-create-date'>Task create date:</label>
            <input type='datetime-local' name='task-create-date' value={date} onChange={onDate}></input>
        </div>
        
        <input type='submit' value='Add to list' disabled={!input || !descriptionInput}></input>
    </form>
  )
}
