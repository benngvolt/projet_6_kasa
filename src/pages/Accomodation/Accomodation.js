import './Accomodation.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { accomodationList } from "../../datas/accommodationList"
import { Collapse } from '../../components/Collapses/Collapse';

function Accomodation() {

    const { id } = useParams();
    console.log(id);
    const index = accomodationList.findIndex((accomodation) => accomodation.id === id);
    console.log(index);

    const accomodation = accomodationList[index];

    const imgListLength = accomodation.pictures.length;
    const [image, updateImage] = useState(0);
    console.log (imgListLength);

    const ratingRange = [1, 2, 3, 4, 5]

    return (
        <section className="accomDatasSection">
            <figure className="accomCarousel">
                <img src= {accomodation.pictures[image]} alt={`${accomodation.title}`} className="accomViewImg"/>
                {imgListLength > 1 ? 
                    <div className="arrowsContainer">
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
                <div className="mainDatasContainer">
                    <div className="leftDatasContainer">
                        <h2>{ accomodation.title }</h2>
                        <address>{ accomodation.location }</address>
                        <ul className="tagsContainer">
                            { accomodation.tags.map((tag) => (
                                <li key={tag} className="tagStyle">{tag}
                                </li>))}
                        </ul>
                    </div>
                    <div className="rightDatasContainer">
                        <figure className="hostProfile">
                            <figcaption className="hostName">{accomodation.host.name}</figcaption>
                            <img src={accomodation.host.picture} alt={`${accomodation.host.name}`} className="hostImg"/>
                        </figure>
                        <div className="starsContainer">
                            {ratingRange.map((ratingElem) => accomodation.rating >= ratingElem ? <span key={ratingElem.toString()}><i className="fa-solid fa-star fullStarStyle"></i></span> : <span key={ratingElem.toString()}><i className="fa-solid fa-star remainingStarStyle"></i></span> )}
                        </div>
                    </div>
                </div>
                <div className="collapsesContainer">
                    <Collapse title="Description" description={accomodation.description}/>
                    <Collapse title="Équipements" description={accomodation.equipments.map((equipment) => (
                        `${equipment}`))} className="equipContainer"/>
                </div>
            </div>

        </section>
    )
  }

  export default Accomodation