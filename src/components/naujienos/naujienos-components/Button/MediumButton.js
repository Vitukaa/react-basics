import './MediumButton.css'

export default function MediumButton(props) {
    if (!props.url || !props.buttonText) {
        return
    }
 
    return (
        <a className="button-medium" href={props.url}>{props.buttonText}</a>
    )
}