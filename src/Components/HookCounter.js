import React, { useEffect, useState } from 'react'
export const HookCounter=()=>{
   const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    },[count])
    
    return(
        <>
        <button onClick={()=>setCount(count+1)}>you clicked{count}times</button>
       
        </>
    )
}