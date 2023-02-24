import './Events.css'


export default function Events(props) {
    return (
        <div className="event-card">
        <div className="event-date">
          <div className="event-day">{props.day}</div>
          <div className="event-moth">{props.month}</div>
        </div>
        <div className="event-location">{props.location}</div>
        <h2 className="event-title">{props.title}</h2>
      </div>
    )
}