// importing hooks
import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // using hook
  // useState(default_Value);
  // this hook is use to change the state and reflect it in UI.
  // this returns an array containing a counter(we can use any name in place of counter) value(0th index) and a function setCounter(we can use any name for this function).
  let [counter, setCounter]= useState(5)
  // 5 is the default value for counter variable

  // let counter = 5;  -- this variable won't be reflected in the UI.

  const addValue = () =>{
      console.log("Clicked : " , counter);
       counter = counter + 1;
       if(counter > 20){
        counter = 20;
       } 
      setCounter(counter);
      //OR
      // setCounter(counter + 1);
  }

  const removeValue = () =>{
    counter = counter - 1;
    if(counter < 0) counter = 0;
    setCounter(counter);
  }

  return (
    <>
      <h1>RG's Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value : {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >reduce Value : {counter}</button>
    </>
  )
}

export default App
