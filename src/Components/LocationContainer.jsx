import React from 'react'
import { useEffect, useState, useContext } from "react";
import { Data } from '../Context/DataProvider';
import Cloudy from "./Cluody"
import Sunny from './Sunny';
import Rain from "./Rain"

function LocationConteiner () {

    const { savingData, weatherData } = useContext(Data)

    const API_KEY = "c8f9018bf55fa80e75020675311d9d56"

    const [ day, setDay] = useState(null)
    const [ description, setDescription ] = useState(null)

    const cloudKeywords = ["nubes", "nublado", "parcialmente nublado", "algo nublado"];
    const isCloudy = cloudKeywords.some(keyword => description && description.includes(keyword));

    const sunKeywords = ["cielo", "claro", "parcialmente claro", "algo claro", "soleado"];
    const isSunny = sunKeywords.some(keyword => description && description.includes(keyword));

    const rainKeywords = ["lluvia", "lluvioso", "parcialmente lluviendo", "lloviendo", "lluvias"];
    const isRain = rainKeywords.some(keyword => description && description.includes(keyword));


    useEffect(() => {

        const fetchData = async position => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`);
            const data = await response.json()
            setDescription(data.weather[0].description)
            savingData(data)     
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
            {isCloudy ? (
                <Cloudy data={weatherData} day={day} description={description}/>
            ) : isSunny ? (
                <Sunny data={weatherData} day={day} description={description}/>
            ) : isRain ? (
                <Rain data={weatherData} day={day} description={description}/>    
            ) : (
                <div className="loader">Loading...</div>
            )}
        </div>
    )
}

export default LocationConteiner;
