import React, { useEffect, useState,useRef } from 'react'

function HookRef() {
    const [timer,setTimer]=useState(0)
    const timerRef=useRef()
    useEffect(()=>{
       timerRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(timerRef.current)
        }
    },[])
  return (
    <div>
        <>{timer}</>
        <button onClick={()=>clearInterval(timerRef.current)}>clear</button>
    </div>
  )
}

export default HookRef