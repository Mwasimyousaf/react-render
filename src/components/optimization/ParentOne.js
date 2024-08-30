import { useState } from "react"
// import  Children  from "./Children"
//import ChildOne from "./ChildOne";

const ParentOne = ({ children }) => {
 
    const [count, setCount] = useState(0);


    const heading = <h1>parent component render</h1>
    console.log('parentOne component render')
  return (
    <div>
      {heading}
      {/* <h1>parent component render</h1> */}
      <button onClick={() => setCount(count+1)}> click - {count}</button>
    {children}
    </div>
  )
}

export default ParentOne
