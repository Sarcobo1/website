import React from "react";
import Navbar from "./Navbar";
import "./all.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Future from "./Future";


function Home() {
    return(
        <>
           <Navbar/>
           <div className="text_1"><span>APP LANDING PAGE</span></div>
           <div className="text_2"><span>Get things done <br /> with Appco</span></div>
           <div className="text_3"><span>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Quod aliquid corrupti aut <br /> ullam  eius tempore nihil earum.</span></div>
           <div className="btn"><button>Download</button></div>
           <div className="icon"><button><PlayArrowIcon/></button></div>
           <div className="img_1"><img src="https://preview.colorlib.com/theme/appco/assets/img/hero/hero_right.png" alt="" /></div>
            <Future/>
        </>
    )
}
export default Home