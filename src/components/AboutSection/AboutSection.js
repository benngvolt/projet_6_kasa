import './AboutSection.css'
import Collapse from "../../components/Collapse/Collapse"
import { useState, useEffect } from 'react'

function AboutSection () {

    const [aboutList, setAboutList] = useState([]);

    useEffect(() => {
        fetch('./datas/aboutList.json')
        .then(res => res.json())
        .then(data => setAboutList(data))
        .catch((error)=>console.log(error.message))
    },[]);

    return (
        <ul className="aboutSection">
            {aboutList.map((collapse) => (
                <li key={collapse.title}>
                    <Collapse title={collapse.title} description={collapse.description} />
                </li>
            ))}    
        </ul>
    )
}

export default AboutSection