import React, { useEffect, useState } from 'react'
import { useDocTitle } from './Usedoctitle'

function Doctitle() {
    const[count,setCount]=useState(0)
   useDocTitle(count)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count-{count}</button>
    </div>
  )
}

export default Doctitle