import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    // const history = useHistory();
    // const handleClick = (friendId) => {
    //     history.push(`/friend/${friendId}`)
    // }
    // console.log(props.friend);
    const friendStyle= {
        border: '1px solid purple',
        borderRadius: "20px",
        margin: '15px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name} </h1>
            <p>Email: {email} </p>
            <Link to={`/friend/${id}`}><button>Show Friend Detail{id}</button></Link> 
            {/* <button onClick={()=>handleClick(id)}>Click me</button> */}
        </div>
    );
};

export default Friend;