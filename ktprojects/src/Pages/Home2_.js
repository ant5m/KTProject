 
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
      context: "KTP Website Founded - Spring 2024",
      media: Logo,
      mediaTitle: "Organization Launch"
    },
    {
      context: "First Project Showcase - Building the foundation for member projects",
      media: slide1,
      mediaTitle: "Project Showcase"
    },
    {
      context: "Member Recruitment Drive - Expanding our community",
      media: slide2,
      mediaTitle: "Recruitment"
    },
    {
      context: "Technology Workshop Series - Skill development workshops",
      media: slide3,
      mediaTitle: "Workshops"
    },
    {
      context: "Community Collaboration - Partnership with local tech companies",
      media: slide4,
      mediaTitle: "Partnerships"
    },
    {
      context: "Innovation Lab Launch - Dedicated space for member projects",
      media: slide5,
      mediaTitle: "Innovation Hub"
    },
    {
      context: "Annual Hackathon - 48-hour coding competition",
      media: slide6,
      mediaTitle: "Hackathon"
    },
    {
      context: "Future Vision - Expanding into new technologies and opportunities",
      media: BeepBop,
      mediaTitle: "Future Goals"
    }
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
        return <motion.div 
          key={idx}
          viewport={{once: true, amount: 0.3}} 
          animate = {{opacity: 1, y: 0}} 
          initial = {{opacity: 0, y: 50}} 
          transition={{duration: 0.8, delay: idx * 0.2}}    
          style = {{  
            display:"flex", 
            flexDirection: idx % 2 == 0? "row" :"row-reverse", 
            justifyContent:"center", 
            alignItems:"center", 
            marginBottom: "0rem",
            minHeight: "220px",
            width: "100%",
            gap: "2.25rem"
          }}>
 <div style= {{
   display:"flex", 
   backgroundColor:"transparent", 
   flexDirection:"column", 
   alignContent:"center", 
   justifyContent:"center", 
   alignItems:"center",
   minWidth: "180px",
   flex: 1,
   maxWidth: "220px"
 }}>
      <img 
        src={itm.media} 
        style = {{
          borderRadius: "50%", 
          border: "4px solid rgba(0, 73, 151, 1)",
          objectFit: "cover"
        }} 
        width={120} 
        height={120}
      />
      <h3 style={{
        color: "rgba(0, 73, 151, 1)", 
        marginTop: "10px", 
        fontSize: "0.9rem",
        textAlign: "center"
      }}>{itm.mediaTitle}</h3>
</div>

      {/* Central dot */}
      <div style={{
        width: "0px",
        height: "0px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 73, 151, 1)",
        border: "0px solid white",
        boxShadow: "none",
        zIndex: 2,
        flexShrink: 0
      }}></div>

 
       <div style = {{
         backgroundColor:"rgba(0, 73, 151, 1)", 
         color:"white", 
         padding:"20px", 
         borderRadius: "12px", 
         fontSize: 16,
         maxWidth: "280px",
         minWidth: "240px",
         boxShadow: "0 4px 12px rgba(0, 73, 151, 0.2)",
         flex: 1
       }}>
        <p style={{margin: 0, lineHeight: "1.5"}}>{itm.context}</p>

        
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


<div style={{textAlign: "center", marginBottom: "3rem"}}>
  <h1 style = {{color: "rgba(0, 73, 151, 1)", fontSize: "2.5rem", marginBottom: "1rem"}}>Our Journey</h1>
  <p style = {{color: "rgba(0, 0, 0, 0.7)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto"}}>
    Discover the milestones and achievements that have shaped Kappa Theta Pi into the thriving tech community it is today.
  </p>
</div>

   
   {/* timeline elements */}
   <div style = {{
     rowGap: 0, 
     flexDirection:"column", 
     display:"flex",
     position: "relative",
     alignItems: "center"
   }}>
     {/* Central connecting line */}
     <div style={{
       position: "absolute",
       left: "50%",
       top: 0,
       bottom: 0,
       width: "4px",
       backgroundColor: "rgba(0, 73, 151, 0.2)",
       transform: "translateX(-50%)",
       zIndex: 0
     }}></div>
     <div style={{position: "relative", zIndex: 1, width: "100%", flexDirection:"column", display:"flex", justifyContent:"center", alignItems:"center"}}>
       <TimeLineElements/>
          <img src = {Logo} height={100} width = {100} style = {{bottom: -10, position:"relative"}}/>
     </div>
</div> 
    </div>
  )
}