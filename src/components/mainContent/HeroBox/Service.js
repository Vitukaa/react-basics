import MediumButton from '../../naujienos/naujienos-components/Button/MediumButton'
import './Service.css'

export default function Service(props) {

    return (
        <div className="service-item">
        <h2 className="service-title">{props.title}</h2>
        <p>{props.description}</p>
        <MediumButton 
            url={props.url}
            buttonText={props.buttonText} />
    </div>
    )
}