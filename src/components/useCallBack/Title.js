import React from "react"
const Title = () => {
    console.log('rendering title')
  return (
    <div>
      <h1>UseClassBack Hook</h1>
    </div>
  )
}

export default React.memo(Title)
