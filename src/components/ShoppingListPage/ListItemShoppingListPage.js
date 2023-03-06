export default function ListItemShoppingListPage(props) {
    const { onDone, item, onDelete } = props

    return (
        <li>
            <input type="checkbox" onChange={() => onDone(item.id)} />
            <span className={item.done ? 'done' : ''}>{item.title}</span> 
            <button onClick={() => onDelete(item.id)}>Delete</button>
      </li>
    )
}