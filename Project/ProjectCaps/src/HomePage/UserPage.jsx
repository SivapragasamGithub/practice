import React, { useContext } from 'react'
import UserCard from '../Cards/UserCard';
import userContext from '../UserContext';

function UserPage() {
    const { candidat, setCandidate } = useContext(userContext)

    return (
        <div className="container">
            <div className="column">
                {
                    candidat.map(user =>
                        <UserCard key={name} user={user} />
                    )
                }
            </div>
        </div>
    )
}

export default UserPage