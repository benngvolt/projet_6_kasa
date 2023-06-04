import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './AccomList.scss'

function Accomlist() {

    const [accommodationList, setAccommodationList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/datas/accommodationList.json')
        .then(res => res.json())
        .then(data => setAccommodationList(data))
        .catch((error)=>console.log(error.message))
    },[]);

    return (
        <section className="accomlist">
            <ul className="accomlist__container">
                {accommodationList.map((accommodation) => (
                    <li key={`${accommodation.id}`} className="accomlist__container__card">
                        <Link to={accommodation.id ? `/accommodation/${accommodation.id}`:"*"} className="accomlist__container__card__link">
                            <div className='accomlist__container__card__link__image'>
                                <img src= {accommodation.pictures[0]} alt={`${accommodation.title}`}/>
                            </div>
                            <figcaption>{accommodation.title}</figcaption>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
  }
  
  export default Accomlist