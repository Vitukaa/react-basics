import React from 'react'

export default function CounterPageListItem(props) {
    const { number, onDeleteNumber } = props
  return (
    <li key={number.id}>
        {number.number}
        <button onClick={() => onDeleteNumber(number.id)}>X</button>
    </li>
  )
}
