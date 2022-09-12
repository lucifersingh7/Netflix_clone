import logo from './logo.svg';
import Home from './Home';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
  <>
   <div className='header'>
       <Navbar/>
   </div>
   <div>
    <h1 style={{color:"white",textAlign:"center",fontSize:"60px"}}>Unlimited movies, Tv Shows and more.</h1>
    <h2 style={{color:"white",textAlign:"center"}}>Watch anywhere, Cancel anytime.</h2>
   </div>
  
   <div className='back'>

    <Home image="https://upload.wikimedia.org/wikipedia/en/d/da/DarkNetflixPosterEnglish.jpg" title='Dark' link="#"/>
    <Home image="https://assets.gadgets360cdn.com/pricee/assets/product/202206/she_season_2_poster_1655270015.jpeg" title='She' link="#"/>
    <Home image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCDeWcTDLEWXq-hhpO5gUZh-rB0QNhSLvCRwUfPk1Vft1tBSH" title='Red Notice' link="#"/>
    <Home image="https://occ-0-2006-300.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcofl3tqZm9r0fMnsAVhFbFv9H0uKcLzLI7KocED48T1NZhDQboQBdz9zuG-zQhYJfjIs1oK583tm_A7HdXc8hWsS2rFQf3xL-T_.jpg" title='Jersey' link="#"/>
    <Home image="https://pbs.twimg.com/media/FOs2aR4XwAM_Hph?format=jpg&name=900x900" title='The Adam Project' link="#"/>
  
   </div>
   <div className='back'>
      <Home image="https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" title='The Gray Man' link="#"/>
      <Home image='https://m.media-amazon.com/images/M/MV5BNzVkOTIxZWUtMTNjOC00NWMwLWEyNDQtNTY2NzYxNjhhYTA1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg' title='Locke And Key' link="#"/>
      <Home image='https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' title='The Witcher' link="#"/>
      <Home image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqtJI12Ex6NStVPQzYXoZIs13DgRcje6NSfwEay3Hy0HmtvO38_IQNZVz97aFuuR2kTc&usqp=CAU' title='Stranger Things' link="#"/>
      <Home image='https://flxt.tmsimg.com/assets/p22471493_b_v13_ac.jpg' title='Keep Breathing' link="#"/>
   </div>
   <br/><br/><br/><br/>
   <footer>
   <br/><br/>
   <h4 style={{fontFamily:"calibri"}}>Questions? Call 000-800-040-1843</h4>
    <div className='footer'>
       <div className='flex1'>
        <h5>FAQ</h5>
     </div>
     <div className='flex2'>
         <h5>Cookie</h5>
     </div>
    </div> 
   </footer>
  </>
   
 
  );
}

export default App;
