import "./Naujienos.css";

import NewsMenu from "./naujienos-components/NewsMenu/NewsMenu";
import NewsSection from "./naujienos-components/NewsPrimary/NewsSection/NewsSection";
import VideoSection from "./naujienos-components/NewsPrimary/VideoSection/VideoSection";
import PodcastsSection from "./naujienos-components/NewsSecondary/PodcastsSection";
import EventsSection from "./naujienos-components/NewsSecondary/EventsSection";
import Header from "../header/Header";
import image1 from "./naujienos-components/CA-images/2022_11_10-Code-Academy-221-1536x1024.jpg";
import image2 from "./naujienos-components/CA-images/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg";
import image3 from "./naujienos-components/CA-images/120840956_3665630673483886_440856791753000379_n-1536x1024.jpg";
import image4 from "./naujienos-components/CA-images/pexels-tima-miroshnichenko-5428258-1536x1038.jpg";
import image5 from "./naujienos-components/CA-images/mintosko-Ro0PNXcpCus-unsplash-1536x1057.jpg";
import image6 from "./naujienos-components/CA-images/image.jpeg";
import image7 from "./naujienos-components/CA-images/Untitled-design.png";
import image11 from "./naujienos-components/CA-images/MicrosoftTeams-image-20.png";


function Naujienos() {

  const newsSectionData = {
    sectionTitle: 'Naujienos',
    latestNewsData: [
      {
        image: image1,
        alt: 'CodeAcademy poster',
        category: 'Naujienos',
        article: "Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?",
        date: "2022-12-12",
      },
      {
        image: image2,
        alt: 'Man holding phone and reading email',
        category: 'Naujienos',
        article: "Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?",
        date: "2022-03-23",
      },
    ],
    olderNewsData: [
      {
        image: image3,
        alt: "CodeAcademy team",
        category: "Naujienos",
        article: "„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį",
        date: "2021-11-09",
      },
      {
        image: image4,
        alt: "Teacher with students",
        category: "Technologijų ritmu",
        article: "Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?",
        date: "2021-09-02",
      },
      {
        image: image5,
        alt: "Hanging t-shirts",
        category: "Technologijų ritmu",
        article: "Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?",
        date: "2021-09-02",
      },
      {
        image: image6,
        alt: "Man holding phone and reading email",
        category: "Technologijų ritmu",
        article: "Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas",
        date: "2021-09-02",
      }
    ],
    buttonData: {
      url: './#',
      text: 'Visos naujienos'
    },
  }

  const videoSectionData = {
    sectionTitle: 'Vaizdo įrašai',
    src: "https://www.youtube.com/embed/b8dGCsP75HA",
    subTitleText: 'Jei galiu aš – gali ir tu!',
    buttonData: {
      url: './#',
      text: 'Visi vaizdo įrašai',
    }
  }

  const podcastSectionData = {
    sectionTitle: 'Podcastai ir radijo laidos',
    podcastsData: [
        {
            image: image7,
            alt: 'Podcast host',
            duration: '7:55',
            title: 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
            date: '2021-09-02',
        },
        {
            image: image7,
            alt: 'Podcast host',
            duration: '7:54',
            title: 'Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“',
            date: '2021-08-25',
        },
        {
            image: image7,
            alt: 'Podcast host',
            duration: '9:22',
            title: 'Kaip gyvensime 2031-aisiais? 10 esminių prognozių',
            date: '2021-08-18',
        },
        {
            image: image7,
            alt: 'Podcast host',
            duration: '8:32',
            title: 'Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“',
            date: '2021-08-11',
        },
    ]
}

  const eventsSectionData = {
    sectionTitle: 'Renginiai',
    eventsData: [
      {
        image: image11,
        alt: 'CodeAcademy talents icon',
        day: '10',
        month: 'Lap',
        location: 'Online',
        title: 'CodeAcademy Talents',
      },
      {
        day: '27',
        month: 'Rug',
        location: 'Online',
        title: 'Intro: "Salesforce" CRM',
      },
      {
        day: '12',
        month: 'Liep',
        location: 'Online',
        title: 'Mokymai',
      }
    ],
    buttonData: {
      url: './#',
      text: 'Daugiau'
    },
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="content-wrapper">
          <NewsMenu />

          <div className="all-main-content">
            <div className="news-primary">
              <NewsSection data={newsSectionData} />
              <VideoSection data={videoSectionData} />
            </div>
            <div className="news-secondary">
              <PodcastsSection data={podcastSectionData} />
              <EventsSection data={eventsSectionData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naujienos;
