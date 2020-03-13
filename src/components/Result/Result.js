import React from 'react';
import './Result.css'
const Result = (props) => {

    const userList = props.addeduser;
    const totalSalary = userList.reduce((total,usr) => total+usr.income,0);
    

    return (
        <div className='result-area'>
            <h2>Total person added : <span>{userList.length}</span></h2>
            <h2>Total Salary : <span>${totalSalary}</span></h2>
        </div>
    );
};

export default Result;