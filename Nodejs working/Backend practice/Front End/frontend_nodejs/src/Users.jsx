import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Users() {
    const [users, setUsers] = useState([])
    let getData = async () => {
        try {
            const userResp = await axios.get("http://localhost:3000/users")

            setUsers(userResp.data)
            console.log(userResp);

        } catch (error) {
            console.log(error);

        }
    }



    useEffect(() => {
        getData()
    }, []);

    let handledelete = async (id) => {
        let yesno = confirm("Are you sure")
        if (yesno) {
            await axios.delete(`http://localhost:3000/user/${id}`)
            getData()
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Users <Link to={"/user-create"} className="btn btn-primary m3">Create User</Link></h1>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/user/${user.id}`} className='btn btn-primary m-1'>View</Link>
                                            <Link to={`/edit/${user.id}`} className='btn btn-primary m-1'>Edit</Link>
                                            <button onClick={() => { handledelete(user.id) }} className='btn btn-danger m-1'>Delete</button>

                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users