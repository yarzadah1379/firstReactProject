import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar= () => {
    const [isMobil,setMobil]=useState(false);
  return (
    <nav className='navbar'>
        <p className='logo'>logo</p>
        <ul className={isMobil ? 'nav-links-mobil' : 'nav-links'}
        onClick={()=>setMobil(false)}
        >
          
            <Link to='/' className='login-page'>
            <li>Login</li>
            </Link>
            <Link to='/signup' className='signup'>
            <li>Signup</li>
            </Link>
            
            <Link to='/logout' className='logout-page'>
            <li>Logout</li>
            </Link>
            

        </ul>
        <button className='mobil-menu-icon'
        onClick={()=>setMobil(!isMobil)}
        >
             {isMobil ? (<i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
        </button>
    </nav>
  )
}

export default Navbar