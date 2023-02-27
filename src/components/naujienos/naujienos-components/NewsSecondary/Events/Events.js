import './Events.css'


export default function Events(props) {
  let { image, alt, day, month, location, title } = props.event



  return (
    <>
      {image 
      && 
        <div className="talents-event">
          <div className="ca-talents-image">
            <img src={image} alt={alt} />
          </div>
            <div className="event-card">
              <div className="event-date">
                <div className="event-day">{day}</div>
                <div className="event-moth">{month}</div>
              </div>
              <div className="event-location">{location}</div>
              <h2 className="event-title">{title}</h2>
            </div>
        </div>
      }
      <div className="event-card">
            <div className="event-date">
              <div className="event-day">{day}</div>
              <div className="event-moth">{month}</div>
            </div>
            <div className="event-location">{location}</div>
            <h2 className="event-title">{title}</h2>
          </div>
    </>

  )
}