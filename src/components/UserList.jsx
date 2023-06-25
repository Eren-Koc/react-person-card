import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import SingleUser from './SingleUser';
const UserList = () => {

//https://randomuser.me/api/?results=5

const [users,setUsers] = useState([]);

const fetchUser= async()=>{
const response = await axios.get("https://randomuser.me/api/?results=5");
setUsers(response.data.results);
}

useEffect(()=>{
fetchUser();
},[])

    return (
   <div className='user-list w-full lg:p-8 h-fit flex justify-start flex-wrap items-center'>
    <ul className='md:flex md:flex-wrap md:justify-center md:items-center text-center w-full'>
     {users.map((user,index)=>(
       <li className='lg:m-4 my-4'><SingleUser user={user} key={index}/> </li>
      ))} 
    </ul>
   </div>
  )
}

export default UserList