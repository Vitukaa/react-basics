import "./EventsSection.css";
import Events from "./Events/Events";
import Title from "../../../partials/Title";
import LargeButton from "../Button/LargeButton";

export default function EventsSection(props) {
  let { sectionTitle, eventsData, buttonData } = props.data
  
  return (
    <div className="events-wrapper">
      <Title text={sectionTitle} />
      {eventsData.map((event, index) => <Events event={event} key={index} /> )}
      <LargeButton url={buttonData.url} text={buttonData.text}/>
    </div>
  );
}
