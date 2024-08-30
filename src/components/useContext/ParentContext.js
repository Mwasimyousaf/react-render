import React, { createContext } from 'react'
import ChildA from './ChildA'

export const contextCreate = createContext()

const ParentContext = () => {

    const person = {
        fname: 'abc',
        lname: 'xyz'
    }

  return (
    <div>
      <contextCreate.Provider value={person}>
        <ChildA />
      </contextCreate.Provider>
    </div>
  )
}

export default ParentContext
