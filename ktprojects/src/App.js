import logo from './logo.svg';
import './App.css';
import Logo from "./assets/logo.png"; 
import BeepBop from "./assets/beepBop.png"; 
import { read } from './components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import {Route, Routes, Link, BrowserRouter, useNavigation} from "react-router-dom";
import Home from './Pages/Home';
import Members from './Pages/Members'; 
import Projects from './Pages/Projects';
import ProjectView from './Pages/ProjectView';
import MembersView from './Pages/MembersView';
import {IoLogoInstagram} from "react-icons/io5"
import {IoLogoLinkedin} from "react-icons/io5"
import {IoPaperPlane} from "react-icons/io5"

const Header = () =>{
  return(
    <header style = {{ boxShadow:" rgba(0,0,0,.2) 0px 0px 10px .1px", position:"fixed", alignItems:"center", paddingInline: 10, display:"flex", borderBottomColor:"rgba(0,0,0,0)", borderBottomWidth:2, borderBottomStyle:"solid", backgroundColor:"white", zIndex: 1000}}>
    <img style = {{height: 50, position:"absolute" }} src = {Logo}/>
      <ul className = "headerNavUL" style = {{ position:"relative", left: "-24em", paddingBlock: 15, listStyleType: "none", display:"flex", flexDirection:"row", columnGap:34, alignContent:"center", paddingInline: 0, justifyContent:"center", width:"100rem", backgroundColor:"transparent"}}>        
        <li onClick = {() =>{}}><Link className='Link' to = "/">Home</Link></li>
        <li><Link className = "Link" to = "/projects">Projects</Link></li>
        <li><Link className = "Link" to = "/members">Members</Link></li>
      </ul>
    </header>
  )
}

const Footer = () =>{
  return(
    <footer style = {{overflow: "hidden", display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", backgroundColor:"rgba(11, 76, 149, 1)", color:"white", position:"relative", width: "100%", bottom: 0, paddingBlock: 5, paddingTop: 10, alignItems:"center" }}>
      <img src = {BeepBop} style = {{height: 61, position:"absolute", left: 40, bottom: 15}} />
 
      <div style = {{display:"flex", flexDirection:"row", justifyContent:"space-evenly", width: "100%"}}>
        <div  style = {{display:"flex", flexDirection:"column"}}>

          <h5 style = {{fontSize: 15, textDecoration:"underline"}}>email@bu.edu <IoPaperPlane style ={{transform:"rotateZ(45deg)", right:-3, bottom:-3, position:"relative"}}/> </h5>
          <h5 style = {{fontSize: 15, textDecoration:"underline"}}>email@bu.edu <IoPaperPlane style ={{transform:"rotateZ(45deg)", right:-3, bottom:-3, position:"relative"}}/></h5>
          <h5 style = {{fontSize: 15, textDecoration:"underline"}}>email@bu.edu<IoPaperPlane style ={{transform:"rotateZ(45deg)", right:-3, bottom:-3, position:"relative"}}/></h5>

        </div>

            <div style = {{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center"}}>

          <h5 style = {{fontSize: 15, alignItems:"center",justifyContent:"center", display:"flex", flexDirection:"row", columnGap: 10}}><IoLogoInstagram size = {20}/> Instagram</h5>
          <h5 style = {{fontSize: 15, alignItems:"center",justifyContent:"center", display:"flex", flexDirection:"row", columnGap: 10}}><IoLogoLinkedin size = {20}/> LinkedIn</h5>
          <h5  style = {{fontSize: 15, alignItems:"center",justifyContent:"center", display:"flex", flexDirection:"row", columnGap: 10}}><img src = {Logo} height = {30} width = {30} />ktpWebsite</h5>
        </div>
      </div>

  

        <h3 style = {{fontSize: 12, position:"relative", bottom: 0, }}>© Kappa Theta Pi 2025. All rights reserved.</h3>


   <img src = {BeepBop} style = {{height: 61, position:"absolute", right: 40, bottom:15}} />

    </footer>
  )
}
function App() {
 

 
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/projects" element = {<Projects/>}/>
  <Route path = "/members" element = {<Members/>}/>
  <Route path = "/projectView" element = {<ProjectView/>}/>
  <Route path = "/membersView" element = {<MembersView/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
