import React from 'react'
import "./App.css" 

function Test() {
  return (
    <div className="basebox container-fluid d-flex flex-row" style={{backgroundColor: "#f2f2f2", height: "100vh", width: "auto" }}>
      <div className="row col-lg-12 d-flex ">
        <div className="container-fluid col-lg-6 quote justify-content-centre" style={{ backgroundColor: "dodgerblue", height: "99vh", width: "100vh",borderRadius:"20px"  }}>
          <div className="row">

            <div className="container " style={{ marginLeft: "200px", marginTop: "300px", color: "white" }} >
              <span><h2><i>Test Your Knowledge</i></h2></span>
              <span><h2><i>Challange Your Limits</i></h2></span>
            </div>
            <div className="container login " style={{ marginLeft: "200px", marginTop: "10px", color: "white" }} >
              <h3>Answer</h3>
              <h3>Learn</h3>
              <h3>Repeat</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid col-lg-6" style={{ backgroundColor: "#f2f2f2", height: "100vh", width: "100vh",borderRadius:"5px",}}>
          <div className="row col-lg-12" style={{ height: "100vh", width: "100vh" }}>
            <div className="d-flex  row " >
              <div className="container ">
                <div className="d-flex">
                  <img src="src/assets/Q.png" alt="" style={{ height: "100px", width: "100px" }} />
                </div>
                <div className="" style={{ marginLeft: "160px", width: "80vh", color: "black" }}><h3><strong>Quiz Fest</strong></h3>
                </div>
              </div>
              <div className="d-flex p-2 align-items-end" style={{ marginLeft: "160px", width: "80vh", color: "black" }}><h4><strong>Login</strong></h4></div>
            </div>
            <div>
              <div className="container-fluid col-lg-6" >
                <div class="form-outline w-100">
                  <label class="form-label" for="input1">Email</label>
                  <input type="text" id="input1" class="form-control" />
                </div>
                <div class="form-outline w-100">
                  <label class="form-label" for="input1">Password</label>
                  <input type="text" id="input1" class="form-control" />
                  <button className="btn btn-primary" style={{ marginTop: "10px" }}>Login</button>
                  {/* <Link className="d-flex" style={{ marginTop: "10px" }}>Register</Link> */}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test