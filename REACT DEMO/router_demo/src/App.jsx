
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import Home from "./Home"
import Products from "./Products"
import Contact from "./Contact"
import About from "./About"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Product from "./Product"

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/products" element={<Products />} />
           <Route path="/product/:id" element={<Product/>}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
{/* <Route path="/product/:id" element= {<Product/>}/> */}