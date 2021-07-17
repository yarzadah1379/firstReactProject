import React from 'react'
import {Link} from 'react-router-dom'
import './main.scss'
const Signup = () => {
  return (
      
      
   
    <div className='signup-container'>
     <form>
     <Link to='/' className='back' ><li> Back</li></Link>
       <div className='name-inputs'>
       <div >
        <h3 className='title'>Add Client</h3>
        </div>
        <div >
          <label for='fname'>First Name</label><br/>
          <input type="text" name='fname'  placeholder='Your first name' className='fname'/>
        </div>
        
        <div >
          <label for='lname'>Last Name</label><br/>
          <input type="text" name='lname'  placeholder='Your last name' className='lname'/>
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
       <button type='submit' className='signup-btn'>Sign Up</button>
     </form>
     </div>
    
  )
}

export default Signup;
