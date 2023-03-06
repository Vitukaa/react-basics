import React from 'react'

export default function FormShoppingListPage(props) {
    const { onSubmit, input, onInput} = props
  return (
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="shopping-item-input">Shopping Item:</label>
            <input type="text" id="shopping-item-input" value={input} onChange={onInput} />
        </div>
        <input type="submit" />
    </form>
  )
}

