import Header from "../header/Header";
import FactsItem from "./FactsItem";
import HeroBox from "./HeroBox/HeroBox";
import "./MainContent.css";

function MainContent() {
  return (
    <>
    <Header />
    <main className="main-content home-page">
      <HeroBox />
      <section className="facts">
        <div className="container">
          <h2 className="facts-header">CodeAcademy pulsas</h2>
          <div className="facts-wrapper">
            <div className="facts-description">
              <p>
                Manome, jog technologinis išsilavinimas privalo sekti šiandienos
                ir rytojaus darbo rinkos tendencijas bei būti prieinamas
                kiekvienam. 🙌
              </p>
              <p>
                Šiuo principu vadovaudamiesi, kas dieną savo studentams
                atveriame naujas galimybes. 🔝
              </p>
            </div>
            <div className="facts-list-wrapper">
              <ul className="facts-list">
                <FactsItem
                  value="1298"
                  description="Šiuo metu mokosi studentų"
                />
                <FactsItem value="4762" description="Viso baigė studentų" />
                <FactsItem
                  value="80%"
                  description="Baigę Pažengusių studijas įsidarbino"
                />
                <FactsItem
                  value="Front-End"
                  description="Populiariausia programa"
                />
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
