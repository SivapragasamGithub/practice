
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import About from "./About"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
