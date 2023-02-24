import './FactsItem.css'

export default function FactsItem(props) {
    return (
        <li className="facts-item">
        <div className="fact-value">{props.value}</div>
        <div className="fact-description">{props.description}</div>
    </li>
    )
}