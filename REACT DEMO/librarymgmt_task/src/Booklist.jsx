import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Books from './Books'

function Booklist() {
    const [books, setbooks] = useState([])
    const [bookToEdit, setBookToEdit] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const bookData = await axios.get("https://66bf9c5d42533c403146a60d.mockapi.io/user")  //to load the home page card during mount process
            setbooks(bookData.data)

        } catch (error) {
            alert("something went wrong")
        }
    }

    const handleDeleteClick = async (productId) => {
        try {
            await axios.delete(`https://66bf9c5d42533c403146a60d.mockapi.io/user/${productId}`) //In given API address slect that particular product.id and delete it
            setbooks((curbooks) => curbooks.filter(item => item.id !== productId));//after delete product.ID,use filter for that ID cannot be present on currnt book list.then mutate the list to current list
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
                    <h4>Books List </h4>
                    <Link to={"/modal"} className="btn btn-primary " >Create</Link>
                </div>
            </div>
            <div className="row">
                {
                    books.map((book) => {
                        return <Books key={book.id} book={book} handleDeleteClick={handleDeleteClick} />
                    })
                }
            </div>
        </div>
    )
}

export default Booklist
