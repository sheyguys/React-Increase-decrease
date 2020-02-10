import React, { useState } from 'react'

const App = () => {
  const [number, Setnumber] = useState(0)

  const increment = () => {
    Setnumber(numbers => numbers + 1)
  }
  const decrement = () => {
    Setnumber(numbers => numbers - 1)
  }

  return (
    <div>
      <h1>Hello React Hooks</h1>
      <h3>Number { number }</h3>
      <button onClick={increment}>Increment Number</button>
      <button onClick={decrement}>Decrement Number</button>
    </div>
  )
}

export default App