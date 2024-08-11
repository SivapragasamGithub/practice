import { useState } from "react"

function Light() {

    const [lightswitch, setswitch] = useState('grey')


    let siva = (siva) => {
        setswitch(siva)
    }
    let red = (siva) => {
        setswitch(siva)
    }
    // let green = (siva) => {
    //     setswitch(siva)
    // }
    let blue = (siva) => {
        setswitch(siva)
    }
    let handleClick = ()=>{
        if (lightswitch !=="green") setswitch("green")
            else setswitch("grey")

    }


    return <div>
        <div className="light" style={{
            backgroundColor: !lightswitch ? 'grey' : 'red',

        }

        } >
        </div>
        <button onClick={() => {
            siva(true)
        }}>On</button>
        <button onClick={() => {
            siva(false)
        }}>Off</button> <br></br>
        <button className="red" onClick={red} >red</button>
        <button className="green" onClick={handleClick} >green</button>
        <button className="blue" onClick={blue} >blue</button><br></br>
        <button>+</button>

        <button>-</button>
    </div>

}
export default Light