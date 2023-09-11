import logo from './logo.svg';
import './App.css';
import { HookCounter } from './Components/HookCounter';
import {HookCounterOne} from './Components/HookCounterOne';
import CompA from './Components/CompA';
import React from 'react';
import CounterOne from './Components/CounterOne';

export const UserContext=React.createContext()
function App() {
  
  return (
    <div className="App">
    <CounterOne></CounterOne>
    </div>
  );
}

export default App;
