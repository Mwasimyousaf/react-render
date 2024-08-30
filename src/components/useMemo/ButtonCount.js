import React from 'react'

const ButtonCount = ({onClick, children}) => {
  console.log('button count render - ')
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default React.memo(ButtonCount)
