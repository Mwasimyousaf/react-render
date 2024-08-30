import React, { useState, useMemo, useCallback } from 'react'
import ButtonCount from './ButtonCount'


const CountMemo = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    
    // const incrementOne = () => {
    //     setCounterOne(counterOne + 1)
    // }

    const incrementTwo =useCallback(() => {
      setCounterTwo(counterTwo + 1)
    },[counterTwo])
    
    const incrementOne =useCallback(() => {
      setCounterOne(counterOne + 1)
    },[counterOne])
     

    const isEven = useMemo(() => {
        let i = 0
        while (i< 2000000000) i++
        return counterOne % 2 === 0
    },[counterOne])
     

  return (
    <div>
      <ButtonCount onClick={incrementOne}>counter One - </ButtonCount>
      {counterOne}
      <span>
            { isEven ?
             'Even' : 
             'Odd'
            }
       </span>
      <ButtonCount onClick={incrementTwo}>counter Two - {counterTwo} </ButtonCount>
    </div>
  )
}

export default CountMemo
