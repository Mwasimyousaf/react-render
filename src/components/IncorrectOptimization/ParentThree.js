import { useState, useMemo, useCallback } from "react"
import {MemorizedChildThree} from './ChildThree'

const ParentThree = () => {
 
    const [count, setCount] = useState(0);
    const [name, setName] = useState('ali')

    const person = {
        fname: 'Muhammad',
        lname: 'Wasim'
    }
    // change the parent state changed then object and function pass props rendered again and again
    // we used object for used useMemo and function for used useCallback hooks 

    const memorizedPerson = useMemo(() => person,[])

    const handleClick = () => {}

    const memorizedHandleClick = useCallback(handleClick,[])

    const heading = <h1>parent component render</h1>
    console.log('parentThree component render')
  return (
    <div>
      {heading}
      {/* <h1>parent component render</h1> */}
      <button onClick={() => setCount(count+1)}> click - {count}</button>
      <button onClick={() => setName('ahmad')}> change name </button>
      

      {/* <MemorizedChildThree name={name} person={memorizedPerson} /> */}
      {/* <MemorizedChildThree name={name} handleClick={memorizedHandleClick} person={memorizedPerson} /> */}
      
      <MemorizedChildThree name={name} person={memorizedPerson} />
        {/* <b>Name:</b>
      </MemorizedChildThree> */}

    </div>
  )
}

export default ParentThree
