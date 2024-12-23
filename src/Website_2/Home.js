import React from 'react'
import './all.css'
import Port from './Portfolio'
import Res from './Resume'
import About from './About'


function Home() {
    return(
        <>
          <div className="img_1"><img src="https://preview.colorlib.com/theme/rezume/images/image_1.jpg" alt="rt" /></div>
          <div className="nav1"><a href="#">Home</a></div>
          <div className="nav2"><a href="#">Portfolio</a></div>
          <div className="nav3"><a href="#">Resume</a></div>
          <div className="nav4"><a href="#">About</a></div>
          <div className="nav5"><a href="#">Contact</a></div>
          <div className="text_1"><span>Hello, I'm <p>Charles Anderson</p></span></div>
          <div className="text_2"><span>AND THIS IS MY REZUMA</span></div>
          <Port/>
          <Res/>
          <About/>
        </>
    )
}
export default Home