import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booklist from "./Booklist";
import Books from "./Books";
import Navbar from "./Navbar";
import Modal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from "react";
export const bookcontext = createContext();
function App() {
  const [bookToEdit, setBookToEdit] = useState([]);
  return (

    <bookcontext.Provider value={{ bookToEdit, setBookToEdit }}>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </bookcontext.Provider>



  )
}

export default App
