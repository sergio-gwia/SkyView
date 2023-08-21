import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Data = createContext()

 const DataProvider = ({children}) => {

  const [ country, setCountry] = useState(null)
  const [ city, setCity] = useState(null)
  const [ weatherData, setWeatherData] = useState(null)

  const saveClientData = (country, city) => {
    if (country && city) {
        setCountry(country);
        setCity(city);
    } else {
        return country
    }
}

  const savingData = (data) => {
    setWeatherData(data)
    return weatherData
  }

  return (
    <Data.Provider value = {{ country, city, saveClientData, savingData, weatherData}}>
        {children}
    </Data.Provider>
  )
}

export default DataProvider