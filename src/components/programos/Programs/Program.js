import './Program.css'
import Moon from '../images/Moon'
import Cap from '../images/Cap'

export default function Program(props) {
let listItems = props.extraData && props.extraData.map((item, index )=> {
  return <li className="course-feature-item" key={index}>{item.icon}{item.text}</li>
})
    return (
        <div className="course-item">
        <div className="course-icon-wrapper">
          <img
            src={props.image}
            alt={props.alt}
            className="course-icon"
          />
        </div>
        <div className="course-title">
          <h2 className="item-article">{props.article}</h2>
        </div>
        <div className="course-description">
          <p>
            {props.description}
          </p>
        </div>
        <div className="course-features">
          <ul className="course-features-list">
            {listItems}
          </ul>
        </div>
        <span className="program-extra-info">{props.extra}</span>
      </div>
    )
}