import React from 'react'
import DenseAppBar from './Navbar'
import './all.css'
import Page from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'


function Home() {
    return(
        <>
        <DenseAppBar/>
        <div className="img2"><img src="https://preview.colorlib.com/theme/glint/images/hero-bg.jpg" alt="" /></div>
        <div className="text_1"><span>Welcome to Glint</span></div>
      <div className="text_2"><span>We are a creative group <br />of people who design <br />influential brands and <br />digital experiences.</span></div>
      <div className="btn"><button>START A PROJECT</button></div>
      <div className="btn2"><button>MORE ABOUT US</button></div>
      <Page/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
        </>
    )
}
export default Home