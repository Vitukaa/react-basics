import "./NewsSection.css";
import LatestNews from "./LatestNews/LatestNews";
import OlderNews from "./OlderNews/OlderNews";
import image1 from "../../CA-images/2022_11_10-Code-Academy-221-1536x1024.jpg";
import image2 from "../../CA-images/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg";
import image3 from "../../CA-images/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg";
import image4 from "../../CA-images/pexels-tima-miroshnichenko-5428258-1536x1038.jpg";
import image5 from "../../CA-images/mintosko-Ro0PNXcpCus-unsplash-1536x1057.jpg";
import image6 from "../../CA-images/image.jpeg";
import Title from "../../../../partials/Title";
import LargeButton from "../../Button/LargeButton";

export default function News() {
  return (
    <div className="all-news-block">
      <Title text='Naujienos' />
      <div className="news-container">
        <div className="latest-news-container">
          <LatestNews
            image={image1}
            alt='CodeAcademy poster'
            category='Naujienos'
            article="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
            date="2022-12-12"
          />

          <LatestNews
            image={image2}
            alt='Man holding phone and reading email'
            category='Naujienos'
            article="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?"
            date="2022-03-23"
          />
        </div>

        <div className="older-news-container">
          <OlderNews
            image={image3}
            alt="CodeAcademy team"
            category="Naujienos"
            article="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
            date="2021-11-09"
          />
          <OlderNews
            image={image4}
            alt="Teacher with students"
            category="Technologijų ritmu"
            article="Kaip po chaotiškų mokslo metų pandemijos apsuptyje         padėti vaikams sugrįžti į klases?"
            date="2021-09-02"
          />
          <OlderNews
            image={image5}
            alt="Hanging t-shirts"
            category="Technologijų ritmu"
            article="Ar skaitmeninė mada išties yra ekologiška industrijos
          gelbėtoja?"
            date="2021-09-02"
          />
          <OlderNews
            image={image6}
            alt="Man holding phone and reading email"
            category="Technologijų ritmu"
            article="Pojūčius pirštų galiukams sugrąžinti gali smegenų
          implantas"
            date="2021-09-02"
          />
        </div>
      </div>

      <div className="all-news-cache">
        <LargeButton url="./#" text="Visos naujienos" />
      </div>
    </div>
  );
}
