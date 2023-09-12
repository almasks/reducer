import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    error:"",
    post:{}
}
const reducer =(state,action)=>{
    switch (action.type){
        case "FETCHING_SUCCESS":
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case "FETCHING_ERROR":
            return{
                loading:false,
                error:"Something went wrong",
                post:{}
            }
        default:
            return state

    }
}
function DataFetching() {
    const [state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/8")
        .then(res=>{
            console.log(res)
            dispatch({type:"FETCHING_SUCCESS",payload:res.data})
        }).catch(dispatch({type:"FETCH_ERROR"}))
    },[])
  return (
    <div>
        {state.loading?"LOADING****":state.post.title}
        {state.error?state.error:null}
    </div>
  )
}

export default DataFetching