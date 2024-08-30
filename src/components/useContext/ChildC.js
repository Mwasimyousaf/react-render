import React, { useContext } from 'react'
import { contextCreate } from './ParentContext';

const ChildC = () => {
    const parentValue = useContext(contextCreate);
    console.log(parentValue)
    const { fname, lname } = parentValue
    console.log('child C render - ')
  return (
    <div>
      first name: {fname} 
      last name: {lname} 
    </div>
  )
}

export default ChildC
