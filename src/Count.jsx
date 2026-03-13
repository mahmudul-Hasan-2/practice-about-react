import React, { useState } from 'react'

export default function Count () {

  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    count > 0 && setCount(count - 1);
  }
  const handleReset = () => {
    count > 0 && setCount(0);
  }
  
  return (
    <div className='card-box'>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>❌</button>
    </div>
  )
}