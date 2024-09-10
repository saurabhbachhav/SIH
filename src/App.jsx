import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Allcityname from './Components/Allcityname'
import Display from './Components/Display'
import { Route, Routes } from 'react-router-dom'
import Booking from './Components/Booking'

function App() {
  const [count, setCount] = useState(0)
  const name = [
    "NAGPUR",
    "NASHIK",
    "PUNE",
    "SATARA",
    "RAYGARH",
    "BARAMATI",
    "AMRAVATI",
    "DHULE",
    "SATANA",
    "SINGRAULI"
  ];//i will save  all this names to database
  return (
    <div className="h-screen bg-white overflow-y-scroll no-scrollbar">
      <Navbar />
      <div className="h-[100%] flex">
        <div className="w-1/6 border-solid border divide-red-600 bg-slate-50 overflow-y-scroll no-scrollbar">
          {name.map((item) => (
            <Allcityname cityname={item} key={item} />
          ))}
        </div>
        <Display />
      </div>
      <Footer />
    </div>
  );
}

export default App
