import { useState } from "react"

function Light() {
    
    const [lightswitch, setswitch] = useState(true)
    
    let toggleswitch= (toggleState) => {
        setswitch(toggleState)
    }

    
    return <div>
        <div className="light" style={{ backgroundColor: !lightswitch ? 'grey' : 'red' }} >

        </div>

        <button onClick={() => {
            toggleswitch (true)
        }}>On</button>
        <button onClick={() => {
            toggleswitch(false)
        }}>Off</button> <br></br>
        <button className="red" >red</button>
        <button className="red" >green</button>
        <button className="red" >blue</button><br></br>
        <button>+</button>

        <button>-</button>
    </div>

}
export default Light