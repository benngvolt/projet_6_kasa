import './Collapse.scss'
import { useCollapse } from 'react-collapsed';
import {collapsesList} from "../../datas/collapsesList"

function Collapse ({title, description}) {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    return (
        <div className="collapseContainer">
            <div className="toggleBar" {...getToggleProps()}>
                <h3 className="collapseTitle">{title}</h3>
                <i className={isExpanded ? "fa-solid fa-chevron-up chevron" : "fa-solid fa-chevron-down chevron"}></i>
            </div>
            <p className="collapseText" {...getCollapseProps()}>{description}</p>
        </div>            
    )
}

function AboutSection () {
    return (
        <ul className="aboutCollapsesContainer">
            {collapsesList.map((collapse) => (
                <li key={collapse.title}>
                    <Collapse title={collapse.title} description={collapse.description}/>
                </li>
            ))}    
        </ul>
    )
}

export {Collapse}
export {AboutSection}