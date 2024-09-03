import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Books from './Books'

function Booklist() {
    const [books, setbooks] = useState([])
    const[editBooks,seteditBooks]=useState([books])
    const fetchData = async () => {

        try {
            const bookData = await axios.get("https://66bf9c5d42533c403146a60d.mockapi.io/user")
            setbooks(bookData.data)
            // const editBookData = await axios.put(`https://66bf9c5d42533c403146a60d.mockapi.io/user ${id}`)
            // seteditBooks(...books,editBookData.data)

        } catch (error) {
            alert("something went wrong")
        }
    }
useEffect(()=>{
    fetchData()
},[])

    return (
        <div className='container'>
            <div className="row" >
                <div className="col-lg-12 text-center mb-3" >
                    <h4>Books & authors List </h4>
                    <Link to={"/modal"} className="btn btn-primary ">Create</Link>
                </div>
            </div>
            
            <div className="row">
            {
                books.map((book)=>{
                    return<Books book={book} />
                })
            }
            </div>
        </div>
    )
}

export default Booklist