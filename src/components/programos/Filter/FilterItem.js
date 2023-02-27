import { transliterate as  slugify } from "transliteration";

export default function FilterItem(props) {
    let { selectName, values } = props.item

    let option = values.map((value, index) => {
        return <option value={strToValues(value)} key={index}>{value}</option>
    })

    function strToValues(str) {
        return slugify(str)
    }

    return (
        <div className="filter-item">
        <label className="filter-item-name" htmlFor={selectName}>{selectName}</label>
        <select className="medium-button" name={selectName}>
            {option}
        </select>
      </div>
    )
}