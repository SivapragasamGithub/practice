import React, { useState } from 'react'
import './App.css'

function Joke({ id, text, favorite, onFavorite }) {
    const [likes, setLike] = useState(0)
    const [disLikes, setDisLikes] = useState(0)
    const [press, setPress] = useState(false)

    const handlelike = () => {
        setLike(likes + 1)
        console.log(`like id:${id},totalLikes${likes}`)
    }
    const handleDislike = () => {
        setDisLikes(disLikes + 1)
        console.log(`dislike id:${id}totalLikes${disLikes}`)

    }
    const handleFavorite = () => {
        onFavorite(id)
    }
    const handlepress = () => {
        setPress(!press)
    }
    return (
        <div>
            <p>{text}</p>
            <p> Likes:{likes}</p>
            <p>Dislikes:{disLikes}</p>
            <p>pressed:{press ? "yes" : "No"}</p>
            <p>favorite:{favorite ? "yes" : "No"}</p>
            <button onClick={handlelike}>Like </button>
            <button onClick={handleDislike}>DisLike </button>
            <button onClick={handleFavorite}>Favorite</button>
            <button onClick={handlepress} >press</button>
        </div>
    )
}

export default Joke