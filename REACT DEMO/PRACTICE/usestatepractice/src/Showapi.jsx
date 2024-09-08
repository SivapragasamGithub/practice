import React, { useState, useEffect } from "react";

const Showapi = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
            const data = {
                'id': 1,
                'name': "Leanne Graham",
                'username': "Bret",
                'email': "Sincere@april.biz",
                'address': {
                    'street': "Kulas Light",
                    'suite': "Apt. 556",
                    'city': "Gwenborough",
                    'zipcode': "92998-3874",
                    'geo': {
                        'lat': "-37.3159",
                        'lng': "81.1496",
                    },
                },
                'phone': "1-770-736-8031 x56442",
                'website': "hildegard.org",
                'company': {
                    'name': "Romaguera-Crona",
                    'catchPhrase': "Multi-layered client-server neural-net",
                    'bs': "harness real-time e-markets",
                },
            };
            setUserData(data);
        };

        fetchData();
    }, []);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <h2>{userData.name}</h2>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${userData.website}`}>{userData.website}</a></p>

            <h3>Address</h3>
            <p>{userData.address.street}, {userData.address.suite}, {userData.address.city}</p>
            <p><strong>Zipcode:</strong> {userData.address.zipcode}</p>
            <p><strong>Coordinates:</strong> Lat: {userData.address.geo.lat}, Lng: {userData.address.geo.lng}</p>

            <h3>Company</h3>
            <p><strong>Name:</strong> {userData.company.name}</p>
            <p><strong>Catchphrase:</strong> {userData.company.catchPhrase}</p>
            <p><strong>Business:</strong> {userData.company.bs}</p>
        </div>
    );
};

export default Showapi;
