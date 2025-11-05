 
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
import { IoVideocam } from 'react-icons/io5';
 import AnthonyImg from "../assets/anthony.jpeg";
import { useRef } from 'react';
import {animate} from "animejs";
import {motion, useInView, useScroll, useSpring} from "framer-motion"

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
  ];

  const timelineElementsData = [
    {
      context: "Website founded Spring 2024",
      media:AnthonyImg,
      mediaTitle:"Anthony Sevilla-Meza"
    },
 {
      context: "Website founded Spring 2024",
      media:AnthonyImg,
      mediaTitle:"Anthony Sevilla-Meza"
    },
 {
      context: "Website founded Spring 2024",
      media:AnthonyImg,
      mediaTitle:"Anthony Sevilla-Meza"
    },

   
  ];

  const timelineElementRef = useRef()

  const {scrollY, scrollYProgress} = useScroll();
  const opacityFadeIn = useSpring(scrollYProgress, {
    stiffness: 0, 
    damping: 50,
    restDelta: .01
  })
  const targetEleme = useRef(); 

  const inView = useInView(targetEleme, {once: true})

  //viewport={{once: true, amount: 1}} animate = {{opacity: 1, y: 0}} initial = {{opacity: 0}} transition={{duration: 3}} 
  const TimeLineElements = () =>{
    return(
      
  <>
      {
      timelineElementsData.map((itm, idx) =>{
        return <motion.div viewport={{once: true, amount: 1}} animate = {{opacity: 1, y: 0}} initial = {{opacity: 0}} transition={{duration: 3}}    style = {{  display:"flex", flexDirection: idx % 2 == 0? "row" :"row-reverse", justifyContent:"space-evenly", alignItems:"center", }}>
 <div style= {{display:"flex", backgroundColor:"transparent", flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
      <img src={itm.media} style = {{borderRadius: 500}} width={150}/>
      <h3>{itm.mediaTitle}</h3>
</div>

            <div style = {{position:"relative", backgroundColor:"gray", width: 1, height: 250, right: idx % 2 == 0? 0 : 51}}></div>

 
       <div style = {{backgroundColor:"rgba(0, 73, 151, 1)", color:"white", padding:"10px 10px 10px 10px", borderRadius: idx % 2 == 0? "100px 10px 10px 100px" : "10px 100px 100px 10px" , fontSize: 17}}>
        <p>{itm.context}</p>

        
      </div>

 
      </motion.div>

      })}
      </>
    )
  }
  return (
    <div className="App" style ={{ paddingInline: 100,alignContent:"center", alignItems:"center", justifyContent:"center", paddingBottom: 50}}>

    <div style = {{backgroundColor:"transparent", flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"space-evenly", paddingBlock: 10, columnGap: 10,  paddingInline: 10}}>
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

       <div style = {{ marginBlock: 100, textAlign:"left", textIndent: 10, fontWeight:400, color:"rgba(0, 73, 151, 1)", fontSize: 20, lineHeight: 2}}> 
      <p>
        Quisque consectetur non ligula vitae blandit. Cras fringilla sem bibendum, porta libero vitae, mollis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce elementum orci lacus, vitae eleifend arcu porttitor sit amet. Morbi suscipit nunc in felis tempor, quis suscipit arcu vestibulum. Nunc vel dui vitae enim dapibus varius dictum non sem. Vivamus ac diam at lacus aliquam porttitor. Morbi eu finibus sapien, a ornare quam. Morbi consectetur faucibus justo, nec mattis diam iaculis et. Pellentesque dignissim diam in ultrices posuere.
      </p>
    </div>


<div>
  <h1 style = {{color: "rgba(0, 73, 151, 1)"}}>Our History</h1>
</div>

   
 {/* timeline elements */}
   <div style = {{rowGap: 0, flexDirection:"column", display:"flex"}}>
  <TimeLineElements/>
</div>

 
    </div>
  );
}