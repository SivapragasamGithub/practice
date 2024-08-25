import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Characters from "./Characters"
import Modal from "./Modal"


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
      image: "https://static.wikia.nocookie.net/gameofthrones/images/1/1e/Arya_Stark-First_of_his_Name.jpg/revision/latest/scale-to-width-down/2100?cb=20140505224634",
      clan: "Stark",
      description: "description2"
    },
    {
      id: "3",
      name: "lanister",
      image: "https://i.pinimg.com/736x/48/c3/0f/48c30f56517d8d8a5cc069a743fa63c2.jpg",
      clan: "Stark",
      description: "description13"
    }
  ]

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Characters characters={characters}/>}>
        <Route path="modal" element={<Modal/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


