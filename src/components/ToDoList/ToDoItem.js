import React from 'react'

export default function ToDoItem(props) {
    const { onIsDone, data, onDelete } = props
  return (
    <li onClick={() => onIsDone(data.id)}>
        <div className='task-wrapper'>
            <h4 className={data.done ? 'task-done' : 'task'}>
                {data.title}
                {data.done && 
                <span>{data.createDate}</span>}
            </h4>

            {!data.done &&
                <>
                    <p>({data.createDate})</p>
                    <p>Desciption: {data.description}</p>
                </>
            }
            <button onClick={() => onDelete(data.id)}>X</button>
        </div>
    </li>
  )
}
