import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [datas, setDatas] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
            const baseUrl = 'http://localhost:4000/users'
            //const endpoint = 'users'
            axios(baseUrl).then((res) => {
                //console.log(res.data)
                setDatas(res.data)
                setIsLoading(false)
            }).catch(error => {
              setError(error.message)
              setIsLoading(false)
            })
            
       
    },[])

    if (isLoading) {
        return <h2>Loading....</h2>
    } else if (error) {
      return <h1>{error}</h1>
    }



    console.log('Users page render ----')
  return (
    <>
      <h1>Users page</h1>
      {error}
      {
        datas.map( data => {
            return <div key={data.id}>{data.name}</div>
        })
      }
    </>
  )
}

export default React.memo(Users)
