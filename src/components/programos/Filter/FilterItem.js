import { transliterate as tr, slugify } from "transliteration";

export default function FilterItem(props) {
    let { selectName, values, checkbox } = props.item



    let filterOption = values.map((value, index) => {
        let strValues = strToValues(value)
        if (!checkbox) {
            return <option value={strValues} key={index}>{value}</option>
        } else {
            return (
                <div className="filter-item-checkbox" key={index}>
                    <input type="checkbox" name={strValues} id={strValues} />
                    <label htmlFor={strValues}>{value}</label>
                </div>
            )
        }
    })

    function strToValues(str) {
        return slugify(str)
    }

    return (
        <>
            {!checkbox &&
            <div className="filter-item">
                <label className="filter-item-name" htmlFor={selectName}>{selectName}</label>
                <select className="medium-button" name={selectName}>
                {filterOption}
                </select>
            </div>
            }
            {checkbox &&
                <div className="filter-item">
                    <fieldset>
                        <legend>{selectName}</legend>
                            {filterOption}
                    </fieldset>
                </div>
            }
        </>
    )
}