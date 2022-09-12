import React from "react";
import './Signup.css';

function Signup()
{
   return (
      <>
      <div className="menubar">
         <div className="logo">
            <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt='logo'/>
         </div>
         <div className="head">
           <ul>
            <li><button style={{margin:"0px 20px", padding:"10px 17px", borderRadius:"2px", color:"white",backgroundColor:"black", border:"1px solid white"}}>English</button></li>
            <li><a href="/signin"><button style={{margin:"0px 20px", padding:"8px 17px", borderRadius:"5px", backgroundColor:"red", color:"white",cursor:"pointer"}}>Sign in</button></a></li>
           </ul>
         </div>
         
      </div>
      <div className="blank"></div>
   <div className="heading">
    <h1 style={{color:"white",textAlign:"center",fontSize:"60px"}}>Unlimited movies, Tv Shows and more.</h1>
    <h2 style={{color:"white",textAlign:"center"}}>Watch anywhere, Cancel anytime.</h2>
    <input type="text" placeholder="Email address" style={{padding:"25px 178px", margin:"0px 20%"}}/>
    <button style={{display:"inline",padding:"17px 30px", position:"absolute",left:"58%",color:"white",backgroundColor:"red", fontSize:"29px"}}>Get Started > </button>
   </div><br/><br/><br/><br/><br/><br/><br/>

   <div className="black">



   <div className="main">
      <div className="para">
          <p style={{color:"white",fontSize:"50px"}}>Enjoy on your TV.
           Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className="picture">
         <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt='flix' style={{height:"320px", width:"360px"}}/>
      </div>
   </div>

   <div className="main">
      <div className="picture">
         <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt='flix' style={{height:"320px", width:"360px"}}/>
      </div>
      <div className="para">
          <p style={{color:"white",fontSize:"50px"}}>Download your shows to watch offline.
Save your favourites easily and always have something to watch.</p>
      </div>
   </div>

   <div className="main">
      <div className="para">
          <p style={{color:"white",fontSize:"50px"}}>Watch everywhere.
Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="picture">
         <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt='flix' style={{height:"320px", width:"360px"}}/>
      </div>
   </div>


   


   </div>
   
   
      </>
   ) 
}

export default Signup;