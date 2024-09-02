import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booklist from "./Booklist";
import Books from "./Books";
import Navbar from "./Navbar";
import Modal from "./Modal";

function App() {


  return (
    <>
      <div>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Booklist />} />
            <Route path="/modal" element={<Modal/>} />
          </Routes>
        </BrowserRouter>

      </div>

    </>
  )
}

export default App
