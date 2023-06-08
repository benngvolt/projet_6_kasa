import { Link } from 'react-router-dom'
import './AccomList.css'
import { useContext } from 'react'
import { AccomodationContext } from '../../utils/AccomodationContext'

function Accomlist() {

    const { accommodationList } = useContext(AccomodationContext)
    
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