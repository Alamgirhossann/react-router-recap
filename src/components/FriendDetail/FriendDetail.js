import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friendDetail, setFriendDetail] = useState({});
    console.log(friendDetail)
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => {setFriendDetail(data)
        console.log(data);
        })
    },[])
    return (
        <div>
            <p>this is friend detail of id {friendId}</p>
            <h1>Friend Name: {friendDetail.name} </h1>
            <p>Email: {friendDetail.email}</p>
            <p>Phone: {friendDetail.phone}</p>
            <p>Website: {friendDetail.website}</p>

        </div>
    );
};

export default FriendDetail;