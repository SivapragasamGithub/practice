import { useState } from "react"
import Joke from "./Joke"

function App() {
  const [favorite,setFavorite] = useState(1)
const jokes = [
  {
    id:1,
    text:"I'm afaraid for the calender.its days are numbered"
  },
  {
    id:2,
    text:"i used to be addicted to soap, but i'm clean now."
  }
]
const handleFavorite = (id) =>{
  setFavorite(id)
}
  return (
    <>
      <div className="" >
      <h1>Dad Jokes</h1>
      {
        jokes.map(joke =>(
          <Joke onFavorite={handleFavorite} favorite={favorite === joke.id} key = {joke.id} id={joke.id} text={joke.text}/>
        ))
      }
      </div>
    </>
  )
}

export default App
