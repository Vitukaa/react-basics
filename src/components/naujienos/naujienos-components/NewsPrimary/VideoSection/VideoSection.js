import SubTitle from '../../../../partials/SubTitle'
import Title from '../../../../partials/Title'
import LargeButton from '../../Button/LargeButton'
import './VideoSection.css'

export default function VideoSection(props) {
  let { sectionTitle, src, subTitleText, buttonData } = props.data

    return (
        <div className="videos-container">
              <div className="videos-wrapper">
                <Title text={sectionTitle} />
                <div className="video-wrapper">
                  <iframe
                    width="560"
                    height="315"
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <SubTitle text={subTitleText} />
                </div>
                  <LargeButton url={buttonData.url} text={buttonData.text} />
              </div>
            </div>
    )
}