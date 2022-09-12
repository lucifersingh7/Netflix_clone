import React from "react";
import './Home.css';

function Home(props)
{
   return (
   <>
    <div className="card">
          <img src={props.image} alt="random pic" />
          <h2 style={{ textAlign:"center", margin:"10px 0px",}}>{props.title}</h2>
          <a href={props.link}><button style={{ cursor:"pointer",margin:"0px 80px", padding:"6px", backgroundColor:"black", color:"white", borderRadius:"8px"}}>Watch Now</button></a>
      </div>
   </>
   )
}

export default Home;