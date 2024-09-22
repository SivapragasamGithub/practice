import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login Page/Login"
import UserRegister from "./Login Page/UserRegister"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployerReister from "./Login Page/EmployerReister"
import ResetPage from "./Login Page/ResetPage"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/company-register" element={<EmployerReister/>}/>
          <Route path="/reset-page" element={<ResetPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
