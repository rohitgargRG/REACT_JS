import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color , setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center gap-5 bg-slate-400 p-5 rounded-xl" style = {{backgroundColor : color}}>
        <div><button className="bg-red-500 text-black" 
        onClick={() => setColor("red")}
        >Red</button></div>
        <div><button className="bg-blue-500 text-black" onClick={() => setColor("blue")}>Blue</button></div>
        <div><button className="bg-green-500 text-black" onClick={() => setColor("green")}>Green</button></div>
        <div><button className="bg-yellow-500 text-black" onClick={() => setColor("Yellow")}>Yellow</button></div>
        <div><button className="bg-white text-black" onClick={() => setColor("white")}>White</button></div>
      </div>
    </>
  )
}

export default App
