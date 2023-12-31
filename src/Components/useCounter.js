import { useState } from "react";
const useCounter=(initialState=0,value)=>{
 
    const [count,setCount]=useState(initialState)
    const increment=()=>{
        setCount(prevCount=>prevCount+value)
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-value)
    }
    const reset=()=>{
        setCount(initialState)
    }
    return[increment,decrement,reset,count]

}
export default useCounter