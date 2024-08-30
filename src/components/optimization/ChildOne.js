import React, {useState} from "react"
const ChildOne = () => {
    
    //const head = <h1>children component</h1>
    const [name, setName] = useState('')

    const message = () => {
      //alert('child one message')
      setName('abc')
    }

    console.log('child One component render')

    return (
    //  {head}
    <>
    
    <h1>child one component</h1>
    <button onClick={message}>alert message {name}</button>
    </>
  )
}

export const MemorizedChildOne = React.memo(ChildOne)
//export default ChildOne
