import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Data = createContext()

 const DataProvider = ({children}) => {

  const [ country, setCountry] = useState(null)
  const [ city, setCity] = useState(null)

  const saveClientData = (country, city) => {
    if (country && city) {
        setCountry(country);
        setCity(city);
    } else {
        return country
    }
}

  return (
    <Data.Provider value = {{ country, city, saveClientData }}>
        {children}
    </Data.Provider>
  )
}

export default DataProvider