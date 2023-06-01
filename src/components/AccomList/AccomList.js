import { Link } from 'react-router-dom'
import { accomodationList } from "../../datas/accommodationList"
import './AccomList.scss'

function AccomList() {

    return (
        <section className="accomListSection">
            <ul className="accomContainer">
                {accomodationList.map((accomodation) => (
                    <li key={`${accomodation.id}`} className="accomCard">
                        <Link to={accomodation.id ? `/accomodation/${accomodation.id}`:"*"} class="accomLink">
                            <div className='accomFirstImg'>
                                <img src= {accomodation.pictures[0]} alt={`${accomodation.title}`}/>
                            </div>
                            <figcaption>{accomodation.title}</figcaption>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
  }
  
  export default AccomList