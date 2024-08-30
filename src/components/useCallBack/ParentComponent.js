import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
    const [age, setAge] = useState(16)
    const [salary, setSalary] = useState(25000)

    // useCallback hook used for performance opitimaiztion
    // useCallBack have two parameter useCallback(ArrowFunction, Dependence mean [stateVariable])
    // useCallback used for function Call

    const incrementAge = useCallback(() => {
      setAge(age+1)
    },[age])


    const incremeSalary = useCallback(() => {
      setSalary(salary + 1000)
    },[salary]) 

    console.log('parent rended')
  return (
    
    <div>
      <Title />
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>
        Increment Age
        </Button>
      <Count text = "Salary" count={salary} />
      <Button handleClick={incremeSalary}>Increment Salary</Button>
    </div>
  
  )
}

export default ParentComponent
