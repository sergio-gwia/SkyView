import React from 'react'
import { useEffect, useState, useContext } from "react";
import LocationDate from './LocationDate';

function LocationConteiner () {

    const API_KEY = "c8f9018bf55fa80e75020675311d9d56"

    const [ weatherData, setWeatherData] = useState(null)
    const [ day, setDay] = useState(null)
    const [ description, setDescription ] = useState(null)

    useEffect(() => {

        const fetchData = async position => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`);
            const data = await response.json()
            console.log(data)
            setDescription(data.weather[0].description)
            setWeatherData(data)
            
        };

        const UsuarioLocation = () => {
            navigator.geolocation.getCurrentPosition(fetchData);
        };

        UsuarioLocation();

        const getDate = () =>{
            let date = new Date()
           const NewDay = `${date.getDate()}-${ ("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
            setDay(NewDay)
        }

        getDate()

    }, []);
    
    return (
        <div>
          {weatherData ? (
                <LocationDate data={weatherData} day={day} description={description}/>
            ) : (
              <div className="loader">Loading...</div>
            )}
        </div>

    );
}

export default LocationConteiner;
