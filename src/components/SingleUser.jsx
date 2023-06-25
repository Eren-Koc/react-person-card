import React from 'react'
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const SingleUser = ({user}) => {
   
  return (
    
    <div className="group p-4 shadow relative w-full md:w-128 bg-slate-400 flex md:flex-row flex-col justify-start rounded-md">
    <div className='group absolute contact w-full h-full hidden flex-col pt-2 pl-2 left-0 top-0 z-10 justify-center items-start group-hover:flex ease-in-out duration-700 backdrop-blur'>
    <div className='flex flex-row items-center my-2 bg-slate-500 text-slate-200 p-2 rounded-md'>
        <BsFillTelephoneFill  className='text-center mx-2' size='1.5rem'/>
        <span className='contact mx-2 font-bold'>{user.phone}</span>
    </div>
    <div className='flex flex-row items-center my-2 bg-slate-500 text-slate-200 p-2 rounded-md'>
        <AiFillMail className='text-center mx-2' size='1.5rem'/>
        <span className='contact mx-2 font-bold'>{user.email}</span>
    </div>
    </div>
        <span className='absolute right-2 top-2 text-xs py-2 px-2 rounded-full bg-slate-500 text-slate-200 z-20'>Age {user.dob.age}</span>
        <img src={user.picture.large} className='md:rounded-full md:w-32 md:h-32 h-20 w-20' alt="" />
        <div className='flex-col text-left'>
        <span className='name block text-xl text-slate-200 pt-2 md:ml-4'>{user.name.first} {user.name.last}</span>
        <span className='location block text-sm text-slate-200 pt-2 md:ml-4'>{user.location.country} | {user.location.state}</span>
        
        </div>
    </div>
  )
}

export default SingleUser