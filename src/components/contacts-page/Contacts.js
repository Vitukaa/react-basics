import Shop from "./Shop";
import './Contacts.css'

export default function Contacts() {
  return (
    <div className="container map">
      <div className="content-wrapper">
        <div className="shops-wrapper">
          <h2 className="shops-section-title">Find us</h2>
          <div className="shops-list">
            <Shop
              title="Parduotuvė 1"
              tel="+37046132154"
              email="shop1@parduotuve.lt"
              address="Arsenalo g. 5, Vilnius 01143"
            />
            <Shop
              title="Parduotuvė 2"
              tel="+37011111111"
              email="shop2@parduotuve.lt"
              address="Arsenalo g. 6, Vilnius 01143"
            />
            <Shop
              title="Parduotuvė 3"
              tel="+37022222222"
              email="shop3@parduotuve.lt"
              address="Arsenalo g. 7, Vilnius 01143"
            />
            <Shop
              title="Parduotuvė 4"
              tel="+37033333333"
              email="shop4@parduotuve.lt"
              address="Arsenalo g. 8, Vilnius 01143"
            />
          </div>
        </div>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.599005021012!2d25.290644!3d54.686757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sArsenalo%20g.%205%2C%2001143%20Vilnius!5e0!3m2!1sen!2slt!4v1671182083840!5m2!1sen!2slt"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
