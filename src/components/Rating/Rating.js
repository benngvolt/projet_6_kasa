import './Rating.scss'

function Rating ({accomRating}) {

    const ratingRange = [1, 2, 3, 4, 5]

    return (
        <div className="stars">
        {ratingRange.map((ratingElem) => accomRating >= ratingElem ? <span key={ratingElem.toString()}><i className="fa-solid fa-star stars--full"></i></span> : <span key={ratingElem.toString()}><i className="fa-solid fa-star stars--remaining"></i></span> )}
        </div>
    )
}

export default Rating