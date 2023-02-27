import './Filter.css'
import FilterItem from './FilterItem'

export default function Filter() {

  const filterList = [
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

  ]

    return (
        <form className="programs-filter">
        <h2 className="item-article">Rastos 47 programos</h2>
          {filterList.map((item, index) => <FilterItem item={item} key={index} /> )}
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