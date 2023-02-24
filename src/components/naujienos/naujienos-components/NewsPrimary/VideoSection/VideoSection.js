import SubTitle from '../../../../partials/SubTitle'
import Title from '../../../../partials/Title'
import LargeButton from '../../Button/LargeButton'
import './VideoSection.css'

export default function VideoSection() {
    return (
        <div className="videos-container">
              <div className="videos-wrapper">
                <Title text='Vaizdo įrašai' />
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/b8dGCsP75HA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <SubTitle text='Jei galiu aš – gali ir tu!' />
                </div>
                  <LargeButton url='./#' text='Visi vaizdo įrašai'/>
              </div>
            </div>
    )
}