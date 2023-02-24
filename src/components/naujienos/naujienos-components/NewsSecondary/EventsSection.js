import "./EventsSection.css";
import Events from "./Events/Events";
import image11 from "../CA-images/MicrosoftTeams-image-20.png";
import Title from "../../../partials/Title";
import LargeButton from "../Button/LargeButton";

export default function EventsSection() {
  return (
    <div className="events-wrapper">
      <Title text='Renginiai' />
      <div className="talents-event">
        <div className="ca-talents-image">
          <img src={image11} alt="CodeAcademy talents icon" />
        </div>
        <Events 
        day='10'
        month='Lap'
        location='Online'
        title='CodeAcademy Talents'
      />
      </div>
      <Events 
        day='27'
        month='Rug'
        location='Online'
        title='Intro: "Salesforce" CRM'
      />
      <Events 
        day='12'
        month='Liep'
        location='Online'
        title='Mokymai'
      />

      <LargeButton url='./#' text='Daugiau'/>
    </div>
  );
}
