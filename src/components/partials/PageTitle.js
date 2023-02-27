import './PageTitle.css'

export default function PageTitle(props) {
    return (
        <h1 className="page-title">{props.text}</h1>
    )
}