import './Podcast.css'

export default function Podcast(props) {
  let { image, alt, duration, title, date } = props.podcast

    return (
        <div className="audio-item">
        <div className="audio-bar">
          <img className="audio-img" src={image} alt={alt} />
          <p className="duration">Trukmė: {duration}</p>
          <button className="play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </button>
        </div>
        <div className="audio-info">
          <div className="audio-article">
            {title}
          </div>
          <div className="audio-date">{date}</div>
        </div>
      </div>
    )
}