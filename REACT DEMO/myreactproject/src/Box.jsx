import Plans from "./Plans";


function Box(props) {
  return (
    <div>
      <div className="container">
        <div className="subscription">
          <h6>{props.subs}</h6>
          <h1>${props.price}/Month</h1>
          <hr></hr>
        </div>
        <div className="descripton">
          
              <div>
                <h4> <Plans/> </h4>
              </div>
          
        </div>
        <button className="button" >Button</button>
      </div>
    </div>
  );
}

export default Box;
