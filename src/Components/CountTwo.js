import React, { useState } from 'react'
import useCounter from './useCounter'

function CountTwo() {
    const [increment,decrement,reset,count]=useCounter(10,10)


  return (
    <div>
        <h1>counter-{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>resett</button>

        </div>
  )
}

export default CountTwo