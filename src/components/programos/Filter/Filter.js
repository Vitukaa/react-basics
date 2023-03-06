import './Filter.css'
import FilterItem from './FilterItem'

export default function Filter(props) {
  let { filterTitle, filterList, buttonText } = props.data

    return (
        <form className="programs-filter">
        <h2 className="item-article">{filterTitle}</h2>
          {filterList.map((item, index) => <FilterItem item={item} key={index} /> )}
        <button className="medium-button-blue">{buttonText}</button>
      </form>
    )
}