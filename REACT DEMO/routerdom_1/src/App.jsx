import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import All from "./All"
import Career from "./Career"
import Fullstackdevelopment from "./Fullstackdevelopment"
import Datascience from "./Datascience"
import Cybersecurity from "./Cybersecurity"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <div>

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/fullstackdevelopment" element={<Fullstackdevelopment />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/datascience" element={<Datascience />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
