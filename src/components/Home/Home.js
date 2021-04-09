
import {React, useState, useEffect } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data => {setFriends(data)
    console.log(data);
    })
    }, []);
    return (
        <div>
            <h1>friends: {friends.length} </h1>
            {
                friends.map(friend => <Friend 
                    key = {friend.key}
                    friend ={friend} ></Friend>)
            }
        </div>
    );
};

export default Home;