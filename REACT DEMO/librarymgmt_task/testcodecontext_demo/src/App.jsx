import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import "./App.css"
import { createContext, useState } from "react"

export const cartContext = createContext();

function App() {
  const[cart,setcart] = useState([])

  return (
    <cartContext.Provider value={{cart,setcart}}>
      <BrowserRouter>
     <Header cart={cart}/>
     <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Cart />}/>

      </Routes>
     </div>
     </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
