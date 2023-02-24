import './Filter.css'

export default function Filter() {
    return (
        <form className="programs-filter">
        <h2 className="item-article">Rastos 47 programos</h2>
        <div className="filter-item">
          <label className="filter-item-name">Tema</label>
          <select className="medium-button" name="subject">
            <option value="Visos">Visos</option>
            <option value="Testavimas">Testavimas</option>
            <option value="Programavimas">Programavimas</option>
            <option value="Dizainas">Dizainas</option>
            <option value="Duomenys">Duomenys</option>
            <option value="Rinkodara">Rinkodara</option>
          </select>
        </div>
        <div className="filter-item">
          <label className="filter-item-name">Vieta</label>
          <select className="medium-button" name="subject">
            <option value="Visos">Visos</option>
            <option value="Online">Online</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Klaipėda">Klaipėda</option>
          </select>
        </div>
        <div className="filter-item">
          <label className="filter-item-name">Tipas</label>
          <select className="medium-button" name="subject">
            <option value="Visi">Visi</option>
            <option value="Courses in English">Courses in English</option>
            <option value="Pradedančių kursai">Pradedančių kursai</option>
            <option value="Pažengusių studijos">
              Pažengusių studijos
            </option>
            <option value="1 + 2 lygis">1 + 2 lygis</option>
            <option value="Studijos 101">Studijos 101</option>
            <option value="Finansuojama UŽT - nedirbantiems">
              Finansuojama UŽT - nedirbantiems
            </option>
            <option value="Finansuojama UŽT - dirbantiems">
              Finansuojama UŽT - dirbantiems
            </option>
          </select>
        </div>
        <div className="filter-item">
          <label className="filter-item-name">Laikas</label>
          <div className="filter-item-checkbox">
            <input type="checkbox" name="time" id="day-time" />
            <label htmlFor="time">Dienomis</label>
          </div>
          <div className="filter-item-checkbox">
            <input type="checkbox" name="time" id="evening" />
            <label htmlFor="time">Vakarais</label>
          </div>
        </div>
        <button className="medium-button-blue">Išvalyti</button>
      </form>
    )
}