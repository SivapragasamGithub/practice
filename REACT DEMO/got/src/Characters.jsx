import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

function Characters() {
    const [characters, setCharacters] = useState([])

    const fetchData = async () => {
        try {
            const charData = await axios.get('https://66bf9c5d42533c403146a60d.mockapi.io/got') //during components loading this data are need to get from DB to display on window (Useeffect for mounting)
           
            setCharacters(charData.data)
            
            
        } catch (error) {
            alert('something went wrong')
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://66bf9c5d42533c403146a60d.mockapi.io/got/${id}`)
            setCharacters(characters.filter(character => character.id !== id))
        } catch (error) {
            alert('Failed to delete the character')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h1>Game of Thrones</h1>
                    <Link to="/modal" className="btn btn-primary">Create</Link>
                </div>
            </div>
            <div className="row">
                {characters.map(character => (
                    <Card key={character.id} character={character} onDelete={handleDelete} />
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default Characters
