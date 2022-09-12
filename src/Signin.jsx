import React from "react";
import './Signin.css';

function Signin()
{
  return(
      <>
        <div className="login">
          <h1 style={{marginBottom:"20px",color:"white",marginLeft:"50px"}}>Sign In</h1>
           <input type="text" placeholder="Email or phone number" style={{borderRadius:"10px",marginBottom:"12px",marginLeft:"50px",padding:"15px 60px",backgroundColor:"gray",opacity:"1.0",color:"black"}}/><br/>
           <input type="password" placeholder="Password" style={{borderRadius:"10px",marginBottom:"36px",marginLeft:"50px",padding:"15px 60px",backgroundColor:"gray",opacity:"1"}}/><br/>
           <button style={{backgroundColor:"red",color:"white",marginBottom:"12px",marginLeft:"50px",padding:"17px 130px", borderRadius:"8px",opacity:"1"}}>Sign in</button><br/>
           <label style={{color:"white"}}><input type="checkbox" style={{marginLeft:"50px",color:"white"}}/>Remember Me</label>

           <br/><br/><br/><br/>
           <h4 style={{marginLeft:"50px",color:"white"}}>New to Netflix?<a href="/signup" style={{color:"gray"}}> Sign up now</a></h4>
           <p style={{color:"gray",textAlign:"center"}}>This page is protected by Google reCAPTCHA </p>
        </div>
      </>
  )
}

export default Signin;