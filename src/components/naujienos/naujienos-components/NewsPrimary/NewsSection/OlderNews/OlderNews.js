import "./OlderNews.css";


export default function OlderNews(props) {
  let { image, alt, category, article, date } = props.olderNew

  return (
    <div className="older-news-card">
      <div className="post-card-image-small">
        <img src={image} alt={alt} />
      </div>
      <div className="post-card-info-small">
        <div className="post-card-category">{category}</div>
        <h3 className="news-article">{article}
        </h3>
        <div className="post-card-date">{date}</div>
      </div>
    </div>
  );
}
