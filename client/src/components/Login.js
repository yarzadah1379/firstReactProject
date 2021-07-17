import React from 'react'
import {Link} from 'react-router-dom'
import './main.scss'

const Login = () => {
  return (
     
   
    <div className='signup-container'>
      
     <form>
     <Link to='/' className='back' ><li> Back</li></Link>
       <div className='name-inputs'>
       <div >
        <h3 className='title'>Logint</h3>
        </div>
        <div>
          <label for='email'>Email</label><br/>
          <input type="email" name='email'  placeholder='Your Email' className='email'/>
        </div>
        <div >
          <label for='password'>Password</label><br/>
          <input type="text" name='password'  placeholder='Your password' className='password'/>
        </div>

       </div>
       <button type='submit' className='signup-btn'>Log In</button>
     </form>
     </div>
    
  )
  
}

export default Login
