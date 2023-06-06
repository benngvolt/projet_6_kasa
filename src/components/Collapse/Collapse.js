import './Collapse.scss'
import { useState } from 'react'

function Collapse ({title, description}) {

    const [textboxState, setTextboxState] = useState('boxClosed');

    return (
        <div className="collapse">
            <div className="collapse__toggleBar" onClick={() => setTextboxState(textboxState === 'boxClosed'?'boxOpened':'boxClosed' )}> 
                <h3 className="collapse__toggleBar--title">{title}</h3>
                <i className={textboxState ==='boxClosed'? "fa-solid fa-chevron-down collapse__toggleBar--chevronDown" : "fa-solid fa-chevron-down collapse__toggleBar--chevronUp"}></i>
            </div>
            <div className={`collapse__textBox ${textboxState}`}>
                {Array.isArray({description}) ? <ul className="collapse__text">{description}</ul> : <p className="collapse__text" >{description}</p>}
            </div>
        </div>            
    )
}


export default Collapse
