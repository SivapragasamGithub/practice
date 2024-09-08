import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'
import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Card() {
    const [userAddress, setUserAddress] = useState([])

    const fData = async () => {
        try {
            const aData = await axios.get("https://66d5f031f5859a704267edf6.mockapi.io/address")
            
            setUserAddress(aData.data)


        } catch (error) {
            alert("something went wrong")
        }
    };
    const handleDelete = async (id)=>{
        try {
            await axios.delete(`https://66d5f031f5859a704267edf6.mockapi.io/address/${id}`)
        setUserAddress(userAddress.filter(address=>address.id!==id))
        } catch (error) {
            alert("something went wrong")
        }
    }
    useEffect(() => {
      
    }, [])



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>Address List</h2>
                    <Link to="/form" className='btn btn-primary'>create</Link>
                </div>
            </div>
            <div className='row'>
                {userAddress.map(address => (
                    <AddressCard key={address.id} address={address} handleDelete={handleDelete} />
                ))
                }
            </div>
        </div>
    )
}

export default Card