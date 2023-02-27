import './Shop.css'

export default function Shop(props) {
    let phone = `tel:${props.tel}`
    let mail = `mailto:${props.email}`
    let addressLink = `https://www.google.com/maps/place/${props.address}`
    return (
        <div className="shop">
                <h3 className="shop-title">{props.title}</h3>
                <ul className="shop-address-list">
                    <li>Phone: <a href={phone}>{props.tel}</a></li>
                    <li>Email: <a href={mail}>{props.email}</a></li>
                    <li>Address: <a href={addressLink} target="_blank">{props.address}</a></li>
                </ul>
            </div>
    )
}