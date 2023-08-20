import React from 'react'

const SearchDate = ({data, day}) => {
  return (
    <div className='container-sm d-flex align-items-center justify-content-center'>

      <div className='location-conteiner'>
        
        <div className='d-flex justify-content-around'>
          <p className='text-light'>{data.name}, {data.sys.country}</p>
          <p className='text-light'>{data.day}</p>
        </div>
        

        <div className='d-flex gap-3'>

          <div className='d-flex align-items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-high" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
              <path d="M6.343 17.657l-1.414 1.414" />
              <path d="M6.343 6.343l-1.414 -1.414" />
              <path d="M17.657 6.343l1.414 -1.414" />
              <path d="M17.657 17.657l1.414 1.414" />
              <path d="M4 12h-2" />
              <path d="M12 4v-2" />
              <path d="M20 12h2" />
              <path d="M12 20v2" />
            </svg>
            <h1 className='text-light'>{data.main.temp}°C</h1>

          </div>

          <div className='d-flex flex-column justify-content-center gap-1'>
            <p className='text-light fw-bold'>{data.weather[0].description.toUpperCase()}</p>
            <p className='text-light fw-bold'>Temp Min: <span className='fw-normal'>{data.main.temp_min}°C</span></p>
            <p className='text-light fw-bold'>Temp Max: <span className='fw-normal'>{data.main.temp_max}°C</span></p>
          </div>

        </div>

        <div className='d-flex align-items-center gap-3 justify-content-center'>

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

export default SearchDate