import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card"
import Products from "./Products"
import Cartpage from "./Cartpage"
import Subtotal from "./Subtotal"
import Grandtotal from "./Grandtotal"
import { UserProvider } from "./UserContext"

function App() {


  return (
    <>
      <UserProvider>
      <div className="container" style={{backgroundColor:"#f6f5f8"}} >
        <div className="row" >
          <Cartpage/>
      <br />
      <br />
      <hr />
      <Subtotal/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <Grandtotal/>
        </div>
      </div>
      </UserProvider>

      
    </>
  )
}

export default App
