import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Characters from "./Characters.Jsx"


function App() {
  const characters = [
    {
      id: "1",
      name: "Jhon snow",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
      clan: "Stark",
      description: "description1"
    },
    {
      id: "2",
      name: "Arya stark",
      image: "https://assets.teenvogue.com/photos/5cc7017bd1b87b6cfcd4d405/master/pass/00-tout-maisie-williams.jpg",
      clan: "Stark",
      description: "description2"
    },
    {
      id: "3",
      name: "lanister",
      image: "https://i.pinimg.com/736x/48/c3/0f/48c30f56517d8d8a5cc069a743fa63c2.jpg",
      clan: "Stark",
      description: "description13"
    },
  ]



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
