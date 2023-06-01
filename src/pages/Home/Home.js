import AccomList from '../../components/AccomList/AccomList'
import Banner from '../../components/Banner/Banner'
import bannerHomeImg from '../../assets/banner.png'

function Home() {
    return (
        <div>
            <Banner bannerImg={bannerHomeImg} bannerText="Chez vous, partout et ailleurs"/>
            <AccomList/>
        </div>
    )
  }
  
  export default Home