import AboutSection from "../../components/AboutSection/AboutSection"
import Banner from "../../components/Banner/Banner"
import bannerAboutImg from "../../assets/banner_2.png"
import '../../components/Banner/Banner.scss';
import './About.css';

function About() {
    return (
        <div>
            <Banner bannerImg={bannerAboutImg} bannerText=""/>
            <AboutSection/>
        </div>
    )
  }
  
  export default About