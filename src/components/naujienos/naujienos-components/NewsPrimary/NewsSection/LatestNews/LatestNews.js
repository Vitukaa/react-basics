import './LatestNews.css'

export default function LatestNews(props) {
    return (
        <div className="latest-news">
        <div className="post-card-image-big">
          <img src={props.image} alt="CodeAcademy poster" />
        </div>
        <div className="post-card-info">
          <div className="post-card-category">{props.category}</div>
          <h3 className="news-article">{props.article}</h3>
          <div className="post-card-date">{props.date}</div>
        </div>
      </div>
    )
}