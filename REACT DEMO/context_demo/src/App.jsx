import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nav from "./Nav"
import { UserProvider } from "./UserContext"
function App() {
  

  return (
    <>
    <UserProvider>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
      </UserProvider>      
    </>
  )
}

export default App
