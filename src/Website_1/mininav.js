import React from 'react'
import './all.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Mini() {
    return (
     <>
       <div className="nav">
       <div className="a1"><a href="#">About Us</a></div>
       <div className="a2"><a href="#">Privacy</a></div>
       <div className="a3"><a href="#">FAQ</a></div>
       <div className="a4"><a href="#">Careers</a></div>
       <div className="a5"><a href="#">My Wishlist</a></div>
       <div className="a6"><a href="#"> Track Your Order</a></div>
       <div className="icon"><FacebookIcon/></div>
       <div className="icon2"><InstagramIcon/></div>
       <div className="icon3"><TwitterIcon/></div>
       <div className="icon4"><YouTubeIcon/></div>
       </div>
       
     </>
    );
  }
  
  export default Mini;
  