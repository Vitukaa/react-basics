import Header from "../header/Header";
import MoonIcon from "../MoonIcon";
import PageTitle from "../partials/PageTitle";
import Title from "../partials/Title";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";
import Cap from "./images/Cap";
import Moon from "./images/Moon";
import Sun from "./images/Sun";
import "./Programos.css";
import Program from "./Programs/Program";

function Programos() {
  const pageTitle = 'Programos'

  const programsFilter = {
    filterTitle: 'Rastos 47 programos',
    buttonText: 'Išvalyti',
    filterList: [
      {
        selectName: 'Tema',
        values: ["Visos", "Testavimas", "Programavimas", "Dizainas", "Duomenys", "Rinkodara"],
      },
      {
        selectName: 'Vieta',
        values: ["Visos", "Online", "Vilnius", "Kaunas", "Klaipėda"],
      },
      {
        selectName: 'Tipas',
        values: ["Visi", "Courses in English", "Pradedančių kursai", "Pažengusių studijos", "1 + 2 lygis", "Studijos 101", "Finansuojama UŽT - nedirbantiems", "Finansuojama UŽT - dirbantiems"],
      },
      {
        selectName: 'Laikas',
        values: ["Dienomis", "Vakarais"],
        checkbox: true,
      },
    ],
  }

  const programsData = [
    {
      image: 'https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg',
      alt: 'course-icon',
      article: '„Salesforce“ CRM – pradedančių',
      description: '„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.',
      extra: 'Naujas',
      extraData: [  
        {
          text: '1 lygis',
          icon: <Cap />,
        },        
        {
          text: 'Vakarais',
          icon: <MoonIcon />,
        },
      ],
    },
    {
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg',
      alt: 'course-icon',
      article: 'Python – pradedantiesiems užimtiems asmenims (223002626)',
      description: 'Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.',
      extra: 'Finansuojama UŽT',
      extraData: [
        {
          text: 'Finansuojama UŽT - dirbantiems',
          icon: <MoonIcon />,
          
        },
        {
          text: 'Vakarais',
          icon: <MoonIcon />,
          
        },
      ]
    },
    {
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg',
      alt: 'course-icon',
      article: 'Frontend Serverless (223002583)',
      description: 'Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.',
      extra: 'Finansuojama UŽT',
      extraData: [
        {
          text: 'Dienomis',
          icon: <Sun />,
        },
      ],
    },
    {
      image: 'https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg',
      alt: 'course-icon',
      article: 'Frontend pradedantiesiems užimtiems asmenims (223002622)',
      description: 'Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio ir, suprantama, pakankamai glaudžiai susijęs su web dizainu.',
      extra: 'Finansuojama UŽT',
      extraData: [
        {
          text: 'Finansuojama UŽT - dirbantiems',
          icon: <MoonIcon />,
          
        },        
        {
          text: 'Vakarais',
          icon: <MoonIcon />,
        },
      ],
    },
    
  ]
  return (
    <>
    <Header />
    <div className="container">
      <div className="content-wrapper">
        <PageTitle text={pageTitle} />
          <Banner />
        <div className="main-content">
          <div className="course-aside">
            <Filter data={programsFilter} />
          </div>
          <div className="course-main">
            {programsData.map((program, index) => <Program program={program} key={index} /> )}
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Programos