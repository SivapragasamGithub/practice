import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login Page/Login"
import UserRegister from "./Login Page/UserRegister"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployerReister from "./Login Page/EmployerReister"
import ResetPage from "./Login Page/ResetPage"
import UserProfile from "./Profile Page/UserProfile"
import UserCard from "./Cards/UserCard"
import "./App.css"
import EmployerCards from "./Cards/EmployerCards"
import Navbar from "./HomePage/Navbar"
import HomePage from "./HomePage/HomePage"
import UserPage from "./HomePage/UserPage"
import { UserProvider } from "./UserContext"
import UserModal from "./Profile Page/UserModal"


function App() {


  return (
    <>
      <UserProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>

            <Route path="/Nav" element={<Navbar />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/jobspage" element={<HomePage />} />
            <Route index path="/Login" element={<Login />} />
            <Route path="/user-register" element={<UserRegister />} />
            <Route path="/company-register" element={<EmployerReister />} />
            <Route path="/reset-page" element={<ResetPage />} />
            <Route path="/Profile" element={<UserProfile />} />
            <Route path="usermodal" element={<UserModal/>}/>
          </Routes>

        </BrowserRouter>
      </UserProvider>

      {/* <UserProfile/> */}


    </>
  )
}

export default App

