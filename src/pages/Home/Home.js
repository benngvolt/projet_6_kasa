import AccomList from '../../components/AccomList/AccomList'
import Banner from '../../components/Banner/Banner'
import bannerHomeImg from '../../assets/banner.png'
import {useState, useEffect} from 'react'


function Home() {

    const [accommodationList, setAccommodationList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/datas/accommodationList.json')
        .then(res => res.json())
        .then(data => setAccommodationList(data))
        .catch((error)=>console.log(error.message))
    },[]);
    
    return (
        <div>
            <Banner bannerImg={bannerHomeImg} bannerText="Chez vous, partout et ailleurs"/>
            <AccomList accommodationList={accommodationList}/>
        </div>
    )
  }
  
  export default Home