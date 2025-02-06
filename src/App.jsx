import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WeatherForecast from './Components/WeatherForecast'
import CurrentWeather from './Components/CurrentWeather'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('Indore');
  return (
    <>
      <BrowserRouter>
      <Navbar input={input} />
      <Routes>
        <Route path="/" element={<CurrentWeather input={input} setInput={setInput} />}/>
        <Route path ="/CurrentWeather" element={<CurrentWeather input={input} setInput={setInput}/>} />
        <Route path="/WeatherForecast" element={<WeatherForecast input={input} setInput={setInput}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
 