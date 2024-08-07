import Form from "./Form"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Taskbar from "./Taskbar"
import Carddisp from "./Carddisp"

function App() {


  return (
    <><div>
      <Header /><br />
      <Form />
      <Taskbar/><br />
      <div className="container" >
        <div className="row" >
          <div className="col-lg-12" style={{marginTop: "50px", display: "flex",justifyItems:"center"}}>
          <Carddisp name="Office task-1" description="first"/>
          <Carddisp name="Office task-2" description="Second"/>
          <Carddisp name="Office task-3" description="Third"/>
          </div>
        </div>
      
      </div>
      
      
    </div>
    </>
  )
}

export default App
