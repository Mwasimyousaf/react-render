import React from "react"

const ChildThree = ({name, person}) => {

    console.log('child Three component render')
    //const head = <h1>children component</h1>
    return (
      <>
     Hello: {name} {person.fname} {person.lname}

    <h1>child Three component</h1>
      </>
  )
}

export const MemorizedChildThree = React.memo(ChildThree)

//export default ChildrenThree
