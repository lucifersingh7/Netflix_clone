import React from "react";
import './Help.css';

function Help()
{
   return (
    <>
     <div className="help_navbar">
        <div className="navbar2">

         <div className="help_logo">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN3aq20jEAJvYR-qvI-pqDRw0FfGtqa4EkEge0da1&s" alt='logo' style={{ height:"70px", width:"200px", margin:"0"}}/>
         </div>
         <div className="help_buttons">
        <a href="/signin"><button style={{color:"white",backgroundColor:"red",padding:"10px",margin:"15px 0px",fontSize:"14px",fontWeight:"bold", borderRadius:"3px",border:"1px red",cursor:"pointer"}}>SIGN IN</button></a>  <a href="/signup"><button style={{color:"white",cursor:"pointer",backgroundColor:"black",padding:"10px",fontSize:"14px",fontWeight:"bold", borderRadius:"3px",border:"1px solid white",margin:"0px 10px"}}>JOIN NETFLIX</button></a>
         </div>

        </div>
        
        <div className="search">
        <h1 style={{color:"white", textAlign:"center",fontSize:"35px", margin:""}}>Help Centre</h1>
        <input type="search" placeholder="What do you need help with ?" style={{padding:"14px 255px",position:"relative", left:"31%" }}/>
     </div>

     </div>

     <div className="whitebox">
     <div className="help_slider1">
        <h2>Sign in for personalised help</h2>
        <button style={{color:"white",backgroundColor:"red",padding:"12px",fontSize:"16px",fontWeight:"bold", borderRadius:"3px",border:"1px red"}}>SIGN IN</button> <button style={{color:"red",backgroundColor:"white",padding:"12px",fontSize:"16px",fontWeight:"bold", borderRadius:"3px",border:"1px solid red",margin:"0px 10px"}}>JOIN NETFLIX</button>
        <br/><br/><p>Popular Topics</p>
        <button style={{color:"black",backgroundColor:"white",border:"1px solid white",fontSize:"16px",fontWeight:"bold",padding:"15px 20px"}}>How to sign up for Netflix</button> <button style={{color:"black",backgroundColor:"white",border:"1px solid white",fontSize:"16px",fontWeight:"bold",margin:"0px 15px",padding:"15px 20px"}}>Plans and Pricing</button> <button style={{color:"black",backgroundColor:"white",border:"1px solid white",fontSize:"16px",fontWeight:"bold",padding:"15px 20px"}}>Can't sign in to Netflix</button>
     </div>
     
     
     </div>
     
     </>

     
   )
}

export default Help;
