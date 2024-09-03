import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Books from './Books'
import { Modal } from 'bootstrap'

function Booklist() {
    const [books, setbooks] = useState([])
    const [bookToEdit, setBookToEdit] = useState(null);
    const navigate = useNavigate();
    const fetchData = async () => {

        try {
            const bookData = await axios.get("https://66bf9c5d42533c403146a60d.mockapi.io/user")
            setbooks(bookData.data)


        } catch (error) {
            alert("something went wrong")
        }
    }
    const handleEditClick = (book) => {
        console.log(book);
        
        setBookToEdit(book);
        console.log(book);
        navigate('/modal', { state: { bookToEdit: book } });
        console.log(book);
    };

    const handleDeleteClick = (productId) => {
        setbooks((curbooks) => curbooks.filter(item => item.id !== productId));
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <div className="row" >
                <div className="col-lg-12 text-center mb-3" >
                    <h4>Books & authors List </h4>
                    <Link to={"/modal"} className="btn btn-primary " >Create</Link>
                    
                </div>
            </div>

            <div className="row">
                {
                    books.map((book) => {
                        return <Books key={book.id} book={book} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />
                    })
                }
            </div>
            
        </div>
    )
}

export default Booklist
