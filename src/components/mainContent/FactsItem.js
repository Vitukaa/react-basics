import './FactsItem.css'

export default function FactsItem(props) {
    let { value, description } = props.fact

    if (!value || !description) {
        return
    }

    return (
        <li className="facts-item">
        <div className="fact-value">{value}</div>
        <div className="fact-description">{description}</div>
    </li>
    )
}