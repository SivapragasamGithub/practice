import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authors from './Authors'

function Authorslist() {
    const [authors, setAuthor] = useState([])
    const [authorToEdit, setAuthorToEdit] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const authorData = await axios.get("https://66d5f031f5859a704267edf6.mockapi.io/author")  
            setAuthor(authorData.data)

        } catch (error) {
            alert("something went wrong")
        }
    }

    const handleDeleteClick = async (productId) => {
        try {
            await axios.delete(`https://66d5f031f5859a704267edf6.mockapi.io/author/${productId}`) 
            setAuthor((author) => author.filter(item => item.id !== productId));
        } catch (error) {
            alert("something wrong")
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <div className="row" >
                <div className="col-lg-12 text-center mb-3" >
                    <h4>authors List </h4>
                    <Link to={"/authorModal"} className="btn btn-primary " >Create</Link>
                </div>
            </div>
            <div className="row">
                {
                    authors.map((author) => {
                        return <Authors key={author.id} author={author} handleDeleteClick={handleDeleteClick} />
                    })
                }
            </div>
        </div>
    )
}


export default Authorslist