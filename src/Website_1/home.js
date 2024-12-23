import Mini from "./mininav";
import Navber from "./navbar";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

function Home() {
    return (
     <>
       <Mini/>
       <Navber/>
       <div className="boxx">
        <div className="text_1"><span>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <p>Shop Now</p></span></div>
        <div className="img_2"><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg" alt="" /></div>
        <div className="text_2"><h2>Fashion Sale</h2></div>
        <div className="text_3"><h1>Minimal Menz Style</h1></div>
        <div className="text_4">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Sapiente commodi veritatis <br /> deserunt iure quas!</div>
        <div className="btn"><button>SHOP NOW</button></div>
        <div className="img_3"><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg" alt="" /></div>
        <div className="img_4"><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg" alt="" /></div>
        <div className="img_5"><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg" alt="" /></div>
        <div className="text_5"><h2>Men`s Fashion</h2></div>
        <div className="text_6"><h2>Women`s Fashion</h2></div>
        <div className="text_7"><h2>Baby`s Fashion</h2></div>
        <div className="text_8"><h1>Trending This Week</h1></div>
        <div className="text_9"><a href="#">Men</a></div>
        <div className="text_10"><a href="#">Women</a></div>
        <div className="text_11"><a href="#">Baby</a></div>
        <div className="text_12"><a href="#">Fashion</a></div>
        <Page2/>
        <Page3/>
        <Page4/>
       </div>
     </>
    );
  }
  
  export default Home;
  