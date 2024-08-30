import React, { useState } from 'react'
import { MemorizedChildA } from './ContextChildren'


// first step React.createContext() and export it 
export const CountContext = React.createContext()
// second step provider,  CountProvider
const CountProvider = CountContext.Provider

const ContextParent = () => {
  console.log('context Parent render')

  const [count, setCount] = useState(0)
    return (
    <div>
        <button onClick={()=> setCount(count+1)}>value - {count}</button>
      <h1>Parent context</h1>
      <CountProvider value={count}>
        <MemorizedChildA />
      </CountProvider>
    </div>
  )
}

export default ContextParent
