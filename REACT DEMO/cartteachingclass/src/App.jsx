import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product"
function App() {


  return (
    <>
      <div className="container">
      <div className="row" >
        <div className="col-lg-8" >
          <h1>Product</h1>
          <div className="d-flex flex-wrap" >
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         </div>

        </div>
        <div className="col-lg-4" >
          <h1>Cart</h1>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
