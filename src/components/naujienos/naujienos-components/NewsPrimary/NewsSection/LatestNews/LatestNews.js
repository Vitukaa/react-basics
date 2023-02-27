import './LatestNews.css'

export default function LatestNews(props) {
  let { image, alt, category, article, date } = props.latestNew
  
    return (
        <div className="latest-news">
        <div className="post-card-image-big">
          <img src={image} alt={alt} />
        </div>
        <div className="post-card-info">
          <div className="post-card-category">{category}</div>
          <h3 className="news-article">{article}</h3>
          <div className="post-card-date">{date}</div>
        </div>
      </div>
    )
}