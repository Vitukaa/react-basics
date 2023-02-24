import "./Naujienos.css";

import NewsMenu from "./naujienos-components/NewsMenu/NewsMenu";
import NewsSection from "./naujienos-components/NewsPrimary/NewsSection/NewsSection";
import VideoSection from "./naujienos-components/NewsPrimary/VideoSection/VideoSection";
import PodcastsSection from "./naujienos-components/NewsSecondary/PodcastsSection";
import EventsSection from "./naujienos-components/NewsSecondary/EventsSection";
import Header from "../header/Header";

function Naujienos() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content-wrapper">
          <NewsMenu />

          <div className="all-main-content">
            <div className="news-primary">
              <NewsSection />
              <VideoSection />
            </div>
            <div className="news-secondary">
              <PodcastsSection />
              <EventsSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naujienos;
