import { useState } from "react"



function Counter() {
 const [counter,setcounter] = useState(0)
 let inc = ()=>{
    if (counter == 10){
    setcounter(0)}
    else{setcounter(counter+1)}
   

 }
 let dec = ()=>{
    if(counter !==0){
    setcounter(counter-1)}

 }
 
 return <div>
        <button onClick={inc} className="btn btn-primary">+</button>
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primary">-</button>
    </div>
}

export default Counter