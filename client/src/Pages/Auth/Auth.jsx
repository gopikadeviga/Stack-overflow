import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
const Auth = () => {

  const [isSignup , setIsSignup]=useState(false)
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const dispatch = useDispatch()
 const navigate = useNavigate()
  const handleSwitch=()=>{
    setIsSignup(!isSignup)
  }

 //for preventing the refreshing url which specifies the login credentials
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert("Enter the email and password")
    }
   else if(!email){
      alert("Enter the email id")
    }
    else if(!password){
      alert("Enter the password")
    }
    if(isSignup){
      if(!name){
        alert("Enter the name to continue");
      }
      dispatch(signup({name, email, password}, navigate))
    }
    else{
      dispatch(login({ email, password},navigate))
    }
      }
  return (
   <section className='auth-section'>
    {isSignup && <AboutAuth/>}
    <div className='auth-container-2'>
          { !isSignup && <img src={icon} alt='stack-overflow' className='login-logo' />}
          <form onSubmit={handleSubmit}>
            {
              isSignup &&(
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}}></input>
                </label>
              )
            }
            <label htmlFor='email'>
              <h4>Email</h4>
              <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
            </label>
            <label htmlFor='password'>
              <div style={{display:"flex" ,justifyContent:"space-between"}}>
              <h4>Password</h4>

              { !isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>Forgot password?</p>}
              </div>
              <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
              { isSignup && <p style={{color:"#666767" , fontSize:"13px"}}>Passwords must contain at least eight<br/> characters, including at least 1 letter and<br/> 1 number.</p>}
            </label>
            {
              isSignup && (
                <label htmlFor='check'>
                  <input type="checkbox" id="check"></input>
                  <p style={{ fontSize:"13px"}}>Opt-in to receive occasional<br/>s product updates, user research<br/> invitations, company<br/> announcements, and digests.</p>
                </label>
              )
            }
            <button type='submit'  className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'}</button>
            {
              isSignup && (
                <p style={{color:"#666767" , fontSize:"13px"}}>By clicking “Sign up”, you agree to our<br/> 
                <span style={{color:"#007ac6"}}>terms of service</span>, 
                <span style={{color:"#007ac6"}}>privacy policy</span> and<br/> 
                <span style={{color:"#007ac6"}}>cookie policy</span> </p>
              )
            }
          </form>
          <p>
            { isSignup ? 'Already have an account?' : "Don't have an account?" }
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Login" : "Sign up"}</button>
          </p>
    </div>


   </section>
  )
}

export default Auth