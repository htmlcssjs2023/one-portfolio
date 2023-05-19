import React, { useState } from 'react';
import './NavBar.css';
import { FaBars,FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    console.log(nav);
    
    const links = [
        {
            id:1,
            link:'home'
        },
          {
            id:2,
            link:'about'
        },
          {
            id:3,
            link:'portfolio'
        },
          {
            id:4,
            link:'skill'
        },
          {
            id:5,
            link:'contact'
        },
        
    ]
    return (
        <div>
            <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 transition-all'>
                <h1 className='text-4xl font-signature ml-2'>Halim</h1>
                <ul className='hidden md:flex'>
                    {
                        links.map(({id, link}) =>
                             <li key={id} className='px-4 cursor-pointer capitalize hover:scale-105 font-medium text-gray-500'>{link}</li>
                            )
                    }                   
                </ul>

       {/* Hembargar button  */}
                <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-5 text-gray-500 z-10 md:hidden'>
                    {
                    nav? <FaTimes size={30}/>: <FaBars size={30}/>
                    }
                </div>
                    {nav && (                      
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black to-gray-800 text-gray-500 duration-500'>
                        {
                        links.map(({id, link}) =>
                             <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                            )
                    }
                </ul>
                    )}
            </div>
        </div>
    );
};

export default NavBar;