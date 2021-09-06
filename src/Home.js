import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
           <div className="home__row">
           <Product title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)" rating="4" 
            id="1" price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
             />
            <Product title="Webcam HD 1080p Web Camera, USB PC Computer Webcam with Microphone, Laptop Desktop Full HD Camera Video Webcam 110 Degree" rating="5"  id="2" price={149.99}
            image="https://m.media-amazon.com/images/I/61dAkngibfL._AC_UL480_FMwebp_QL65_.jpg"
             />

           </div>

           <div className="home__row">
           <Product title="Mayfair Linen 800 Thread Count 100% Egyptian Cotton Sheets, White Queen Sheets Set, Long Staple Cotton..." rating="5" 
            id="3" price={21}
            image="https://m.media-amazon.com/images/I/A1r-Mh72ksL._AC_SL1500_.jpg"
             />
            <Product title="Amazon Basics 21-Inch, Orange, 21-inch" rating="5"  id="1" price={68} 
            image="https://m.media-amazon.com/images/I/81YcvyNy1BS._AC_SL1500_.jpg"
             />
              <Product title="BENCMATE Protective Inflatable Collar for Dogs and Cats - Soft Pet Recovery Collar Does Not Block Vision E-Collar" rating="3" 
            id="6" price={37}
            image="https://m.media-amazon.com/images/I/71knCuptWHL._AC_SL1500_.jpg"
             />

           </div>
        </div>
    )
}

export default Home
