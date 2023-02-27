import Podcast from './Podcast/Podcast'
import './PodcastsSection.css'
import Title from '../../../partials/Title';


export default function PodcastsSection(props) {
    let { sectionTitle, podcastsData } = props.data

    
    return (
        <div className="audio-wrapper">
            <Title text={sectionTitle} />
            {podcastsData.map((podcast, index) => <Podcast podcast={podcast} key={index} /> )}
        </div>
    )
}
