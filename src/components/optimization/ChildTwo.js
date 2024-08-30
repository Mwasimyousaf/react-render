import React from "react"


const ChildTwo = () => {
    console.log('childTwo component render')
    //const head = <h1>children component</h1>
    return (
    //  {head}
    <h1>childTwo component</h1>
  )
}

export const MemorizedChildTwo = React.memo(ChildTwo)
//export default ChildTwo
