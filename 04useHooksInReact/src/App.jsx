import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if(count < 20)
    setCount(count + 1);
  else
   alert("Count is his maximum value");

  }
  function decreaseCount() {
    if(count > 0 )
    setCount(count - 1);
  else
    alert("Count is his lowest value");
  }

  return (
    <>   
      <h1>Vite + React _hooks</h1>
      <h2>count is :  {count}</h2>
      <div className="card">
        <button onClick={incrementCount}>Add </button> 
         <br></br>
        <button onClick={decreaseCount}>Remove</button> 
        </div>
    </>
  )
}

export default App
