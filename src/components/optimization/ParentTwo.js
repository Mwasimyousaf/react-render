import React, { useState } from "react"
import { MemorizedChildTwo } from "./ChildTwo";
import {MemorizedChildOne} from "./ChildOne";
// import  Children  from "./Children"
//import ChildOne from "./ChildOne";

const ParentTwo = () => {
 
    const [count, setCount] = useState(0);


    const heading = <h1>parent Two component render</h1>
    console.log('parentTwo component render')
  return (
    <div>
      {heading}
      {/* <h1>parent component render</h1> */}
      <button onClick={() => setCount(count+1)}> click - {count}</button>
   
    <MemorizedChildOne />
    
    
    </div>
  )
}

export const MemorizedParentTwo = React.memo(ParentTwo)
//export default ParentTwo
