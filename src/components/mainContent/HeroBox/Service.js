import MediumButton from '../../naujienos/naujienos-components/Button/MediumButton'
import './Service.css'

export default function Service(props) {
    let { title, description, url, buttonText } = props.service

    return (
        <div className="service-item">
        <h2 className="service-title">{title}</h2>
        <p>{description}</p>
        <MediumButton 
            url={url}
            buttonText={buttonText} />
    </div>
    )
}