import React, { useReducer } from 'react'
const initialState={
    firstCounter:0,
}
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return {...state,firstCounter:state.firstCounter+1}
           
        case "decrement":
            return {...state,firstCounter:state.firstCounter-1}
          
        case "reset":
            return initialState
        default :
        return  state
    }
}

function HookCounterTwo() {
    
   const[count,dispatch]= useReducer(reducer,initialState)
   const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count.firstCounter}</h1>
        <button onClick={()=>dispatch("increment")}>increment1</button>
        <button  onClick={()=>dispatch("decrement")}>decrement1</button>
        <button onClick={()=>dispatch("reset")}>reset</button>

        <h1>{countTwo.firstCounter}</h1>

        <button  onClick={()=>dispatchTwo("increment")}>increment1</button>
        <button  onClick={()=>dispatchTwo("decrement")}>increment1</button>

       
        <button onClick={()=>dispatchTwo("reset")}>reset</button>
    </div>

  )
}

export default HookCounterTwo