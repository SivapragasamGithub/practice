import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    const handleclickDelete = async (id) => {
        try {
            await axios.delete(`https://66d5f031f5859a704267edf6.mockapi.io/address/${id}`)
            setUserAddress(userAddress.filter(address => address.id !== id))
        } catch (error) {
            alert("something went wrong")
        }
    }
    useEffect(() => {
        fData()
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='col-lg-12'>
                        <h2>Address List</h2>
                        <br />
                        <Link to="/form" className='btn btn-primary'>create</Link>
                    </div>
                    <div className='col-lg-12'>
                        {
                            userAddress.map(user => (
                                <AddressCard key={user.id} user={user} handleclickDelete={handleclickDelete} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card



