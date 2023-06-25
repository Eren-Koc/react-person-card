import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
const Header = () => {
  return (
 <header className='bg-slate-500 w-full h-16 flex justify-between items-center shadow fixed top-0 left-0 z-10 px-4 md:px-8'>
    <div className='Logo text-xl md:text-3xl font-bold text-slate-200'>Eren Koç Project</div>
    <nav>
        <ul className='flex flex-row'>
            <div className='github-col flex flex-row text-center justify-center items-center md:mx-2'>        
           <a target='_blank' className='group text-slate-200 text-m justify-center items-center flex flex-row md:p-2 rounded hover:bg-slate-200 ease-in-out duration-300' href="https://github.com/Eren-Koc">
           <FaGithub className='text-slate-200 md:mx-1 group-hover:text-slate-500' size='2rem'/>
            <span className='socail-medias-text md:mx-1 group-hover:text-slate-500 hidden lg:block'>Github</span>
            </a> 
            </div>
            <div className='linkedin-col flex flex-row text-center mx-2 justify-center items-center md:mx-2'>        
           <a target='_blank' className='group text-slate-200 text-m justify-center items-center md:p-2 flex flex-row rounded hover:bg-slate-200 ease-in-out duration-300' href="https://linkedin.com/in/Eren-Koç">
           <FaLinkedin className='text-slate-200 mx-1 group-hover:text-slate-500' size='2rem'/>
            <span className='socail-medias-text mx-1 group-hover:text-slate-500 hidden lg:block'>Linkedin</span>
            </a> 
            </div>
        </ul>
    </nav>
 </header>
  )
}

export default Header