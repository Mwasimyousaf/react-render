import { useQuery } from "react-query"
import axios from "axios"




const RQusers = () => {

  const baseUrl = 'http://localhost:4000/users'
  const fetchUsers = () => {
    return axios.get(baseUrl)
  }

  const result = useQuery(
    'users', 
    fetchUsers,
    {
      //cacheTime: 5000 // after 5minutes query expire, by default cacheTime 5 minutes
      //staleTime: 30000 // default staleTime is 0 second
      //refetchOnMount: true, // by default true and when data refetch ture or false always best opition ture
      //refetchOnWindowFocus: true,  // by default value true, other always, false
      // when data change in database then refectchOnWindowFocus automatic upadate data
      //refetchInterval: 2000, // by Default false and milisecond used value.. 
      // refetch the data after 2 milisecond .. used when stock changed and update again and again
      //refetchIntervalInBackground: true
      enabled: false // mean data not fetch but condition apply create button and click then data refetch 
    }
  )

  // const result = useQuery('users', () => {
  //   return axios.get('http://localhost:4000/users')
  // })

  //console.log(result)

  const {isLoading, data, isError, error, isFetching, refetch} = result

  console.log({isLoading:isLoading, isFetching:isFetching})

  if (isLoading || isFetching) {
    return <h1>Loading .......</h1>
  } else if (isError) {
    return <h1>{error.message}</h1>
  }

  const list = data?.data.map(user => {
    return(
      <div key={user.id}>
        <p>{ user.name }</p>
      </div>
    ) 
  })


    console.log('RQ==users')
  return (
    <div>
        {/* {
          data?.data.map(user => {
            return <div key={user.id}>{user.name}</div>
          })
        } */}
        <button onClick={refetch}>Fetch user name</button> {/* create button refetch data again... refetch value destructure from const result*/}
       
        {list}

    </div>
  )
}

export default RQusers
