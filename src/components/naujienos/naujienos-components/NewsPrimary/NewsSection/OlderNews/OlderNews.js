import "./OlderNews.css";


export default function OlderNews(props) {
  return (
    <div className="older-news-card">
      <div className="post-card-image-small">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="post-card-info-small">
        <div className="post-card-category">{props.category}</div>
        <h3 className="news-article">{props.article}
        </h3>
        <div className="post-card-date">{props.date}</div>
      </div>
    </div>
  );
}
