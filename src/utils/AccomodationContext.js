import React, { createContext, useState, useEffect } from 'react';

export const AccomodationContext = createContext()

export const AccommodationProvider = ({ children }) => {
    
    const [accommodationList, setAccommodationList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/datas/accommodationList.json')
        .then(res => res.json())
        .then(data => setAccommodationList(data))
        .catch((error)=>console.log(error.message))
    },[]);
    

    return (
        <AccomodationContext.Provider value={{ accommodationList, setAccommodationList }}>
            {children}
        </AccomodationContext.Provider>
    )
}