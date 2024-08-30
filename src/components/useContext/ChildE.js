import React from 'react'
import ChildC from './ChildC'

const ChildE = () => {
    console.log('child E render -')
  return (
    <div>
      child B render
      <ChildC />
    </div>
  )
}

export default ChildE
