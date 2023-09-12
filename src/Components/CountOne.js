import React, { useContext, useState } from 'react'
import useCounter from './useCounter'

function CountOne() {
    const [increment,decrement,reset,count]=useCounter(0,5)


  return (
    <div>
        <h1>counter-{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>resett</button>

        </div>
  )
}

export default CountOne