 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import {Slide, Fade} from "react-slideshow-image"; 
import slide1 from "../assets/slide1.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"
import slide4 from "../assets/slide4.png"
import slide5 from "../assets/slide5.png"
import slide6 from "../assets/slide6.png"
import slide7 from "../assets/slide7.png"
import slide8 from "../assets/slide8.png"
import slide9 from "../assets/slide9.png"
import slide10 from "../assets/slide10.png"
import slide11 from "../assets/slide11.png"
import slide12 from "../assets/slide12.png"
import slide13 from "../assets/slide13.png"
import 'react-slideshow-image/dist/styles.css';

export default function Home() {
//testing supabase: 
  const slideImgs = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
  ]
  return (
    <div className="App" style ={{alignContent:"center", alignItems:"center", justifyContent:"center", }}>
    <div style = {{backgroundColor:"transparent", flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"space-evenly", paddingBlock: 10, columnGap: 10,  paddingInline: 50}}>
        <div style = {{backgroundColor:"transparent", width:500,  }}>
     <Fade duration={1000} indicators = {false} arrows={false} autoplay infinite canSwipe >
         {
            slideImgs.map((itm, idx) =>{
                if(idx > 0){
                    return(
                         <img src = {itm} height = {"400rem"} style={{alignSelf:"center"}}/>
                    )
                }
            })
        }
     </Fade>
          </div>

<div style = {{textAlign:"center", alignContent:"center", alignItems:"center"}}>
     <h1 style = {{ textAlign:"center", color:"rgba(0, 73, 151, 1)", fontSize: "2rem", fontWeight: 1000, alignSelf:"center" }}>Kappa Theta Pi Projects</h1>
     <br/>
    <h1 style = {{maxWidth: 500, fontSize: "1rem", color:"rgba(0, 0, 0, 0.79)"}}>KTP is dedicated to promoting our membes' projects and updlift their efforts </h1>
    <br/>
    <button 
    className = "learnMore"
  
    title = "Learn More">Explore Projects</button>
  
</div>
    </div>

    </div>
  );
}