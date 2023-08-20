import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Components/Home"
import LocationContainer from "./Components/LocationContainer"
import SearchContainer from './Components/SearchContainer'

function App() {
  return (
    <BrowserRouter>

      <Routes>
    
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/locationweather' element={<LocationContainer/>}/> 
        <Route exact path='/searchweather' element={<SearchContainer/>}/> 
      
      </Routes>   

    </BrowserRouter>
  )
}

export default App
