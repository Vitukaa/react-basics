import './HeroBox.css'
import Service from './Service'

export default function HeroBox() {
    return (
        <section className="hero-box">
        <div className="container-main">
            <div className="hero-box-title-wrapper">
                <h1 className="page-title">Programuok savo ateitį!®</h1>
                <p className="page-description">CodeAcademy programavimo kursai – tiesiausias kelias technologinės
                    karjeros link</p>
            </div>
            <div className="service-list">
                <Service 
                    title='Studentams' 
                    description='Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim! Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai'
                    url='./#'
                    buttonText='Sužinok daugiau'
                />
                <Service                 
                    title='Verslui' 
                    description='Esame geriausias kompanijų draugas Edutech erdvėje.
                    Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo kursai'
                    url='./#'
                    buttonText='Sužinok daugiau'          
                    />
            </div>
        </div>
    </section>
    )
}