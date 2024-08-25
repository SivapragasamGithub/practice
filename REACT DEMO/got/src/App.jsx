import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Characters from "./Characters"
import Modal from "./Modal"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
