import './HeroBox.css'
import Service from './Service'

export default function HeroBox(props) {
    let { pageTitle, description, servicesData } = props.data

    return (
        <section className="hero-box">
        <div className="container-main">
            <div className="hero-box-title-wrapper">
                <h1 className="page-title">{pageTitle}</h1>
                <p className="page-description">{description}</p>
            </div>
            <div className="service-list">
                {servicesData.map((service, index) => <Service service={service} key={index} /> )}
            </div>
        </div>
    </section>
    )
}