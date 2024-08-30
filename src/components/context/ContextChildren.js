import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log("child A render")
    return (
        <>
            <div>
                Child A
            </div>
        <ChildB />
        </>
    )
}

export const MemorizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('Child B render')
    return (
        <>
        <div>
                Child B
            </div>
        <ChildC />
        </>
    )
}

export const ChildC = () => {
    const count = useContext(CountContext)
    console.log(count)
    console.log('child C render')
    return (
        <>
         <div>
                Child C = {count}
            </div>
        </>
    )
}
