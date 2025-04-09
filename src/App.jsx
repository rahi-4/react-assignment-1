import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Incidents from './Card/IncidentPage'
import Dashboard from './Card/DashBoard'
import Locations from './Components/Locations'
import Error from './ErrorPage.jsx/Error'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Dashboard/>}/>
      <Route path='/Incidents' element={<Incidents/>}/>
      <Route path='/Locations' element={<Locations/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
