import React from 'react';
import './User.css'


const User = (props) => {
    const user = props.user;
    const {name,email,img,phone,income} = user;
    const {street,city} = user.address;
    
    return (
        <div className='user'>
            <img src={img} border="0"  alt=""/>
            <h1>{name}</h1>
    
            <h3>Email : {email}</h3>
            <h3>Phone : {phone}</h3>
            <h3>Address : {street+' , '+city}</h3>
            <h3>Yearly salary : ${income}</h3>
            <button className='add' onClick={(e)=>props.addUser(user,e)}>+</button>
        </div>
    );
};

export default User;