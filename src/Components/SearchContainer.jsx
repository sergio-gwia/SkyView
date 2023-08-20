import React, { useEffect, useState, useContext } from "react";
import { Data } from '../Context/DataProvider';
import SearchDate from './SearchDate';
import SearchError from "./searchError";



function SearchConteiner () {
    const { country, city } = useContext(Data) 

    const API_KEY = "c8f9018bf55fa80e75020675311d9d56"

    const [weatherData, setWeatherData] = useState(null);
    const [day, setDay] = useState(null);
    const [error, setNewError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=es`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setWeatherData(data);
            } catch (error) {
                setNewError(error);
            }
        };

        const getDate = () =>{
            let date = new Date()
            const NewDay = `${date.getDate()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
            setDay(NewDay);
        }

        getDate();
        fetchData();
    }, []);

    return (
        <div>
            {error ? (
                <SearchError/>
            ) : weatherData ? (
                <SearchDate data={weatherData} day={day} />
            ) : (
                <div className="loader">Loading...</div>
            )}
        </div>
    );
}

export default SearchConteiner;
