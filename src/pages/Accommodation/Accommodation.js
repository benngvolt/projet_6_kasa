import './Accommodation.css'
import Collapse from '../../components/Collapse/Collapse';
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AccomodationContext } from '../../utils/AccomodationContext'

function Accommodation() {

    const { accommodationList } = useContext(AccomodationContext)

    const { id } = useParams();
    const index = accommodationList.findIndex((accommodation) => accommodation.id === id);

    const [image, updateImage] = useState(0);
    
    const navigate = useNavigate();  

    useEffect(() => {
        if (index === -1) {
          navigate('*');
        }
    }, [index, navigate]); //props de dépendance pour déclencher le useEffect
    
    if (index === -1) {
    return null;
    }

    const accommodation = accommodationList[index];
    const imgListLength = accommodation.pictures.length;

    const ratingRange = [1, 2, 3, 4, 5]

    return (
        <section className="accom">
             <figure className="accom__carousel">
                <img src= {accommodation.pictures[image]} alt={`${accommodation.title}`} className="accom__carousel__image"/>
                {imgListLength > 1 ? 
                    <div className="accom__carousel__arrows">
                        <button onClick={() => updateImage(image > 0 ? image - 1 : imgListLength - 1)}>
                            <i className="fa-solid fa-chevron-left" id="leftArrow"></i>
                        </button>
                        <button onClick={() => updateImage(image < imgListLength - 1 ? image + 1 : 0)}>
                            <i className="fa-solid fa-chevron-right" id="rightArrow"></i>
                        </button>
                    </div>
                    : null }
            </figure>
            <div>
                <div className="accom__mainDatas">
                    <div className="accom__mainDatas__containers leftContainer">
                        <h2>{ accommodation.title } </h2>
                        <address>{ accommodation.location }</address>
                        <ul className="accom__mainDatas__containers__tags">
                            { accommodation.tags.map((tag) => (
                                <li key={tag} className="accom__mainDatas__containers__tags--style">{tag}
                                </li>))}
                        </ul>
                    </div>
                    <div className="accom__mainDatas__containers rightContainer">
                        <figure className="accom__mainDatas__containers__host">
                            <figcaption className="accom__mainDatas__containers__host__name">{accommodation.host.name}</figcaption>
                            <img src={accommodation.host.picture} alt={`${accommodation.host.name}`} className="accom__mainDatas__containers__host__image"/>
                        </figure>
                        <div className="accom__mainDatas__containers__stars">
                            {ratingRange.map((ratingElem) => accommodation.rating >= ratingElem ? <span key={ratingElem.toString()}><i className="fa-solid fa-star accom__mainDatas__containers__stars--full"></i></span> : <span key={ratingElem.toString()}><i className="fa-solid fa-star accom__mainDatas__containers__stars--remaining"></i></span> )}
                        </div>
                    </div>
                </div>
                <div className="accom__collapses">
                    <Collapse title="Description" description={accommodation.description}/>
                    <Collapse title="Équipements" description={accommodation.equipments.map((equipment) => <li key={equipment}>
                        {`${equipment}`}</li>)}/>
                </div>
                    </div>

        </section>
    )
  }

  export default Accommodation