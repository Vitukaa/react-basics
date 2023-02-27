import Header from "../header/Header";
import FactsItem from "./FactsItem";
import HeroBox from "./HeroBox/HeroBox";
import "./MainContent.css";

function MainContent() {
  const heroBoxData = {
    pageTitle: 'Programuok savo ateitį!®',
    description: 'CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link',
    servicesData: [
        {
            title: 'Studentams' ,
            description: 'Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim! Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai',
            url: './#',
            buttonText: 'Sužinok daugiau',
        },
        {
            title: 'Verslui' ,
            description: 'Esame geriausias kompanijų draugas Edutech erdvėje. Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo kursai',
            url: './#',
            buttonText: 'Sužinok daugiau',
        }

    ],
  }
  
  const factsSectionTitle = 'CodeAcademy pulsas'

  const factsSectionDescription = 'Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌 Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝'

  const factsData = [
    {
      value: 1298,
      description: 'Šiuo metu mokosi studentų',
    },
    {
      value: 4762,
      description: 'Viso baigė studentų',
    },
    {
      value: '80%',
      description: 'Baigę Pažengusių studijas įsidarbino',
    },
    {
      value: 'Front-End',
      description: 'Populiariausia programa',
    },
  ]

  return (
    <>
    <Header />
    <main className="main-content home-page">
      <HeroBox data={heroBoxData} />
      <section className="facts">
        <div className="container">
          <h2 className="facts-header">{factsSectionTitle}</h2>
          <div className="facts-wrapper">
            <div className="facts-description">
              <p>{factsSectionDescription}</p>
            </div>
            <div className="facts-list-wrapper">
              <ul className="facts-list">
                {factsData.map((fact, index) => <FactsItem fact={fact} key={index} /> )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
    
  );
}

export default MainContent;
