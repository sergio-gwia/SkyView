import React from 'react'

const Rain = ({data, day}) => {

  return (
    
    <div className='container-sm d-flex align-items-center justify-content-center location-conteiner'>

          <div className="video-background">
                <video src="./src/assets/Rain.mp4"  className="video" type="video/mp4" autoPlay loop muted />
          </div>

          <div>
  
          <div className='d-flex justify-content-around'>
            <p className='text-light'>{data.name}, {data.sys.country}</p>
            <p className='text-light'>{day}</p>
          </div>
  
          <div className='d-flex gap-3 justify-content-center conteiner-temp'>
  
            <div className='d-flex align-items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-rain logo-weather" width="96" height="96" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
                <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
            </svg>
              <h1 className='text-light'>{data.main.temp}°C</h1>
  
            </div>
  
            <div className='d-flex flex-column justify-content-center gap-1 align-items-center'>
              <p className='text-light fw-bold'>{data.weather[0].description.toUpperCase()}</p>
              <p className='text-light fw-bold'>Temp Min: <span className='fw-normal'>{data.main.temp_min}°C</span></p>
              <p className='text-light fw-bold'>Temp Max: <span className='fw-normal'>{data.main.temp_max}°C</span></p>
            </div>
  
          </div>
  
          <div className='d-flex align-items-center gap-3 justify-content-center conteiner-weather'>
  
          <div className='d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                <path d="M10 9l4 0" />
              </svg>
              <div className='d-flex flex-column align-items-center'>
                  <p className='text-light'>Sens Term: </p>
                  <p className='text-light'>{data.main.feels_like}°C</p>
              </div> 
            </div>
  
            <div className='d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
              </svg>
              <div className='d-flex flex-column align-items-center'>
                  <p className='text-light'>Humedad:</p>
                  <p className='text-light'>{data.main.humidity}%</p>
              </div> 
            </div>
  
            <div className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>
                <div className='d-flex flex-column align-items-center'>
                  <p className='text-light'>Viento:</p>
                  <p className='text-light'>{data.wind.speed}KH</p>
                </div> 
            </div>
  
            <div className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-thermometer" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z" />
                  <path d="M16 7l-1.5 -1.5" />
                  <path d="M13 10l-1.5 -1.5" />
                  <path d="M10 13l-1.5 -1.5" />
                  <path d="M7 17l-3 3" />
                </svg>
                <div className='d-flex flex-column align-items-center'>
                  <p className='text-light'>Presion:</p>
                  <p className='text-light'>{data.main.pressure}hPa</p>
                </div> 
            </div>
  
          </div>
  
        </div>
  
    </div>
  )
}

export default Rain