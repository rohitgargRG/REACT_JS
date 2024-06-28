import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Rohit",
    age : 21
  }

  let newArr = [1,2,3,4];

  return (
    <>
      <h1 class="font-bold bg-green-400 p-4 rounded-xl">Tailwind Test</h1>
      
      {/* accesssing components and passing props to it */}
      <Card username = "propsDefaultArg" someObj = {myObj} someArr = {newArr} btnText = "click Me"/>
      <Card username = "idiot"  btnText = "hover me"/>
    </>
  )
}

export default App
