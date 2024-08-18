import React, { useContext } from 'react'
import UserContext from './UserContext'

function About() {
    const prakash = useContext(UserContext)
    return (
        <div className='container' >
            <h1>About {prakash.userName}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non eligendi neque maxime? 
                Quam sit explicabo at quia nam perferendis, modi pariatur, dolorem ullam et ipsam. Ratione repellat nam tempore?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, adipisci 
                possimus sint in porro, tempora voluptate veniam soluta dolorum aliquam animi sunt consectetur sed eligendi suscipit laborum est officiis officia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius non nam 
                cupiditate explicabo. Laboriosam asperiores at maxime? Unde, ex excepturi iure corporis maiores nostrum minima harum cum eveniet natus.</p>
        </div>  

    )
}

export default About