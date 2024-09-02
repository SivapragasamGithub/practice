
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
function App() {
  const [users, setUsers] = useState([])
  let getData = async () => {
    try {
      const userResp = await axios.get("http://localhost:3000/users")
      setUsers(userResp.data)
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    getData()

  }, []);
  return (
    <>
      <ul>
        {
          users.map((user, index) => {
            console.log(user);

            return <li key={index}>{user.name}-{user.age}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
