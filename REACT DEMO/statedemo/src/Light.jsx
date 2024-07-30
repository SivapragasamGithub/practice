import { useState } from "react"

function Light() {
    let toggleswitchon = (toggleState) => {
        setswitch(toggleState)
    }

    const [lightswitch, setswitch] = useState(true)
    return <div>
        <div className="light" style={{ backgroundColor: !lightswitch ? 'grey' : 'red' }} >

        </div>

        <button onClick={() => {
            setswitch(true)
        }}>On</button>
        <button onClick={() => {
            setswitch(false)
        }}>Off</button>
    </div>
}
export default Light