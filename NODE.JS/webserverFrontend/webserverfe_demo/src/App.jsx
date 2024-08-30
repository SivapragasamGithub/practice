import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  let getData = async () => {
    try {
      const userResp = await axios.get("http://localhost:3000/users");
      setUsers(userResp.data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <ul>
        {
          users.map((user,index) => {
            return (<li key={index}>{user.name}-{user.age}</li>)
          })
        }
      </ul>
    </>
  )
}

export default App
