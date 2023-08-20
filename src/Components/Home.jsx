import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../Context/DataProvider";

function Home() {
    const { saveClientData } = useContext(Data);

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleSearch = () => {
        saveClientData(country, city);
    };

    return (
        <div className="container-md">
            <div className="video-background">
                <video src="./src/assets/Nubes.mp4"  className="video" type="video/mp4" autoPlay loop muted />
            </div>
            <div className="content-overlay">
                <p className="mt-2 text-light text-center">¡Descubre el pronóstico del tiempo!</p>
                <div className="d-flex justify-content-center">
                    <div className="logo"></div>
                </div>
                <h4 className="mt-2 text-light text-center mt-3">Por favor, ingresa el País y la Ciudad.</h4>
                <div className="d-flex justify-content-center">
                    <div className="input-group search">
                        <input type="text" className="form-control" placeholder="País" value={country} onChange={(e) => setCountry(e.target.value)} />
                        <input type="text" className="form-control" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)} />
                        <Link to="/searchweather" onClick={handleSearch}>
                            <button className="btn btn-outline-secondary" type="button" id="button-search">Buscar</button>
                        </Link>
                    </div>
                </div>
                <Link to={"/locationweather"}>
                    <div className="d-flex justify-content-center align-items-center gap-1 mt-2">
                        <p className="text-light mb-1">Conocer el pronóstico desde mi ubicación actual</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;




