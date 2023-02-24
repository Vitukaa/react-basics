import Podcast from './Podcast/Podcast'
import './PodcastsSection.css'
import image7 from "../CA-images/Untitled-design.png";
import Title from '../../../partials/Title';


export default function PodcastsSection() {
    return (
        <div className="audio-wrapper">
              <Title text='Podcastai ir radijo laidos' />
                <Podcast 
                    image={image7}
                    alt='Podcast host'
                    duration='7:55'
                    title='Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas'
                    date='2021-09-02'
                />
                <Podcast 
                    image={image7}
                    alt='Podcast host'
                    duration='7:54'
                    title='Elektrinių povandeninių dronų kompanija pasirengusi tapti
                    vandenynų „SpaceX“'
                    date='2021-08-25'
                />
                <Podcast 
                    image={image7}
                    alt='Podcast host'
                    duration='9:22'
                    title='Kaip gyvensime 2031-aisiais? 10 esminių prognozių'
                    date='2021-08-18'
                />
                <Podcast 
                    image={image7}
                    alt='Podcast host'
                    duration='8:32'
                    title='Jei virtualus pasaulis taps realybe, jos neturėtų valdyti
                    „Facebook“'
                    date='2021-08-11'
                />
            </div>
    )
}
