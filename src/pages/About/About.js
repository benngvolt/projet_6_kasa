import {AboutSection} from "../../components/Collapses/Collapse"
import Banner from "../../components/Banner/Banner"
import bannerAboutImg from "../../assets/banner_2.png"

function About() {
    return (
        <div>
            <Banner bannerImg={bannerAboutImg} bannerText=""/>
            <AboutSection/>
        </div>
    )
  }
  
  export default About