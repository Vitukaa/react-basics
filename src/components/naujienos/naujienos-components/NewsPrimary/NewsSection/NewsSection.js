import "./NewsSection.css";
import LatestNews from "./LatestNews/LatestNews";
import OlderNews from "./OlderNews/OlderNews";

import Title from "../../../../partials/Title";
import LargeButton from "../../Button/LargeButton";

export default function News(props) {
 let { sectionTitle, latestNewsData, olderNewsData, buttonData } = props.data

  return (
    <div className="all-news-block">
      <Title text={sectionTitle} />
      <div className="news-container">
        <div className="latest-news-container">
          {latestNewsData.map((latestNew, index) => <LatestNews latestNew={latestNew} key={index} /> )}

        </div>

        <div className="older-news-container">
          {olderNewsData.map((olderNew, index) => <OlderNews olderNew={olderNew} key={index} /> )}
        </div>
      </div>

      <div className="all-news-cache">
        <LargeButton url={buttonData.url} text={buttonData.text} />
      </div>
    </div>
  );
}
