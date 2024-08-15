import { BrowserRouter,Routes,Route,Router } from "react-router-dom"
import All from "./components/All"

import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./components/Nav"
import Fullstack from "./components/Fullstack"
import Cybersecurity from "./components/Cybersecurity"
import Datasceince from "./components/Datasceince"
import Carrer from "./components/Carrer"



function App() {
 
  return (
    <>
   <div>
   <Nav/>
   <BrowserRouter>
   <Routes>
    <Route index path="/" element={<All/>}/>
    <Route  path="/fullstack" element={<Fullstack/>}/>
    <Route  path="/Cybersecurity" element={<Cybersecurity/>}/>
    <Route  path="/Datasceince" element={<Datasceince/>}/>
    <Route  path="/Carrer" element={<Carrer/>}/>
    
   </Routes>
   </BrowserRouter>
   </div>
  
    
    </>
  )
}

export default App
