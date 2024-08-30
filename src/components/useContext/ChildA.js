import React from 'react'
import ChildE from './ChildE'


const ChildA = () => {
    console.log('child A render -')
  return (
    <div>
      child A render
      <ChildE />
    </div>
  )
}

export default ChildA
