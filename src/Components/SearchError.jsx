import React from 'react'
import { Link } from 'react-router-dom'

const SearchError = () => {
  return (
    <div className="d-flex  flex-column align-items-center container-sm mt-5 gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad-dizzy" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
            <path d="M8 9l2 2" />
            <path d="M10 9l-2 2" />
            <path d="M14 9l2 2" />
            <path d="M16 9l-2 2" />
        </svg>
        <h2 className='text-light'>Lo sentimos, no pudimos</h2>
        <h2 className='text-light'>encontrar tu ciudad!</h2>
        <h3 className='text-light'>Vuelve a intentarlo.</h3>
        <h4 className='text-light'>Recuerda ingresar el País y la ciudad.</h4>
        <Link to={"/"}>
            <button className='btn btn-outline-secondary'>Volver</button>
        </Link>
        
    </div>
                
  )
}

export default SearchError