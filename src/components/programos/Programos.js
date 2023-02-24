import Header from "../header/Header";
import MoonIcon from "../MoonIcon";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";
import Cap from "./images/Cap";
import Moon from "./images/Moon";
import Sun from "./images/Sun";
import "./Programos.css";
import Program from "./Programs/Program";

function Programos() {
let iconsArr = [
  {
    text: '1 lygis',
    icon: <Cap />,
    
  },        
  {
    text: 'Vakarais',
    icon: <MoonIcon />,
    
  }
]
  return (
    <>
    <Header />
    <div className="container">
      <div className="content-wrapper">
        <h1 className="page-title">Programos</h1>
          <Banner />
        <div className="main-content">
          <div className="course-aside">
            <Filter />
          </div>

          <div className="course-main">
            <Program 
              image='https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg'
              alt='course-icon'
              article='„Salesforce“ CRM – pradedančių'
              description='„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai
              dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o
              svarbiausia – efektyviau išnaudoti sukauptus duomenis.'
              textCap='1 lygis'
              textMoon='Vakarais'
              extra='Naujas'
              extraData={iconsArr}
            />
            <Program 
              image='https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg'
              alt='course-icon'
              article='Python – pradedantiesiems užimtiems asmenims (223002626)'
              description='Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga
              programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir
              patogu.'
              textCap='Finansuojama UŽT - dirbantiems'
              textMoon='Vakarais'
              extra='Finansuojama UŽT'
              extraData={[
                {
                  text: 'Finansuojama UŽT - dirbantiems',
                  icon: <MoonIcon />,
                  
                },        
                {
                  text: 'Vakarais',
                  icon: <MoonIcon />,
                  
                }
              ]}
            />
            <Program 
              image='https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg'
              alt='course-icon'
              article='Frontend Serverless (223002583)'
              description='Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą
              sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.'
              textMoon='Dienomis'
              extra='Finansuojama UŽT'
              extraData={[
                {
                    text: 'Dienomis',
                    icon: <Sun />,
                }
              ]}
            />
            <Program 
              image='https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg'
              alt='course-icon'
              article='Frontend pradedantiesiems užimtiems asmenims (223002622)'
              description='Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą
              sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio ir, suprantama,
              pakankamai glaudžiai susijęs su web dizainu.'
              textCap='Finansuojama UŽT - dirbantiems'
              textMoon='Vakarais'
              extra='Finansuojama UŽT'
              extraData={[
                {
                  text: 'Finansuojama UŽT - dirbantiems',
                  icon: <MoonIcon />,
                  
                },        
                {
                  text: 'Vakarais',
                  icon: <MoonIcon />,
                  
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Programos