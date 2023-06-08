import AccomList from '../../components/AccomList/AccomList'
import Banner from '../../components/Banner/Banner'
import bannerHomeImg from '../../assets/banner.png'
import { useContext } from 'react'
import { AccomodationContext } from '../../utils/AccomodationContext'


function Home() {

    const { accommodationList } = useContext(AccomodationContext)
    
    return (
        <div>
            <Banner bannerImg={bannerHomeImg} bannerText="Chez vous, partout et ailleurs"/>
            <AccomList accommodationList={accommodationList}/>
        </div>
    )
  }
  
  export default Home