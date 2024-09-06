import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booklist from "./Booklist";
import Books from "./Books";
import Navbar from "./Navbar";
import Modal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css"
import { createContext, useState } from "react";
import Authorslist from "./Authorslist";
import AuthorModal from "./AuthorModal";
export const bookcontext = createContext();

function App() {
  const [bookToEdit, setBookToEdit] = useState([]);
  const [authorToEdit, setAuthorToEdit] = useState([]);
  return (

    <bookcontext.Provider value={{ bookToEdit, setBookToEdit, authorToEdit, setAuthorToEdit }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/modal/:id" element={<Modal />} />
          <Route path="/authorlist" element={<Authorslist />} />
          <Route path="/authorModal" element={<AuthorModal />} />
          <Route path="/authorModal/:id" element={<AuthorModal />} />
        </Routes>
      </BrowserRouter>
    </bookcontext.Provider>



  )
}

export default App
