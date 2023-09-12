import logo from './logo.svg';
import './App.css';
import { HookCounter } from './Components/HookCounter';
import {HookCounterOne} from './Components/HookCounterOne';
import CompA from './Components/CompA';
import React, { useReducer } from 'react';
import CounterOne from './Components/CounterOne';
import HookCounterTwo from './Components/HookCounterTwo';
import CompB from './Components/CompB';
import CompD from './Components/CompD';
import DataFetching from './Components/DataFetching';
import ParentComp from './Components/ParentComp';
import MemoCount from './Components/MemoCount';
import HookRef from './HookRef';
import Doctitle from './Doctitle';
import CountOne from './Components/CountOne';
import CountTwo from './Components/CountTwo';


function App() {
  return (
    <div className="App">
    {/* <CounterOne></CounterOne> */}
    {/* <HookCounterTwo></HookCounterTwo> */}
   {/* <CountContex.Provider value={{countState:count,countDispatch:dispatch}}>
    <div>count {count}</div>
      <CompA></CompA>
      <CompB></CompB>
      <CompD></CompD>
   </CountContex.Provider> */}
   {/* <DataFetching></DataFetching> */}
   {/* <ParentComp></ParentComp> */}
   {/* <MemoCount></MemoCount> */}
   {/* <HookRef></HookRef> */}
   {/* <Doctitle></Doctitle> */}
   <CountOne></CountOne>
   <CountTwo></CountTwo>

    </div>
  );
}

export default App;
