import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function ParentComp() {
    const[age,setAge]=useState(25)
const[salary,setSalary]=useState(50000)
const incrementAge=useCallback(()=>{
    setAge(age+1)},[age])
const incrementSalary=useCallback(()=>{
    setSalary(salary+1000)},[salary])


  return (
    <div>
        <Title></Title>
        <Count text="age" count={age} ></Count>
        <Button text="add age" increment={incrementAge}>add age</Button>
        <Count  text="salary" count={salary}></Count>
        <Button text="add salary"increment={incrementSalary}>add salary</Button>

    </div>
  )
}

export default ParentComp