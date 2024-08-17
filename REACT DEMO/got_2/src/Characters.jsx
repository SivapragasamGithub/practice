import React from 'react'
import Card from './Card'
import { Outlet } from 'react-router-dom'

function Characters({characters}) {
  return (
    <div className="container" > 
        <div className="row" >
          <div className="col-lg-12 text-center mb-3" >
            <h1>Game of Thrones</h1>
            <button className="btn btn-primary " >Create</button>
          </div>
        </div>
        <div className="row" > 
          {
            characters.map((character)=>{
return<Card character={character}/>
            })
          }
        </div>
        <Outlet/>
      </div>
  )
}

export default Characters