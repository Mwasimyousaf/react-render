import { useState } from "react"
import  Children  from "./Children"

const Parent = () => {
 
    const [count, setCount] = useState(0);


    const heading = <h1>parent component render</h1>
    console.log('parent component render')
  return (
    <div>
      {heading}
      {/* <h1>parent component render</h1> */}
      <button onClick={() => setCount(count+1)}> click - {count}</button>
      <button onClick={() => setCount(5)}> count to 5 </button>
      <button onClick={() => setCount(0)}> count to 0 </button>
      <Children />
    </div>
  )
}

export default Parent
