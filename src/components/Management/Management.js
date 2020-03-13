import React,{useState} from 'react';
import './Management.css'
import usersData from '../../usersData';
import User from '../User/User';
import Result from '../Result/Result';


const Management = () => {
   const [users,setUsers] = useState(usersData);
   const [addeduser,setAddedser] = useState([]);

   function addUser(singleUser,e){
        const newUserList = [...addeduser,singleUser];
        setAddedser(newUserList);
        e.target.disabled =true;
        e.target.style.backgroundColor = 'rgb(174, 216, 160)'
        
   }


     
    return (
        <div className='management-container'>
            <div className="user-container">
            {
                users.map(user => <User user={user} addUser={addUser}></User>)
            }
            
        </div>
        <div className="total-result-container">
            <Result addeduser={addeduser}></Result>
        </div>

        </div>
    );
};

export default Management;