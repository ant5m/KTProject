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

const Header = () =>{
  return(
    <header style = {{ position:"fixed", alignItems:"center", paddingInline: 10, display:"flex", borderBottomColor:"rgba(0,0,0,0)", borderBottomWidth:2, borderBottomStyle:"solid", backgroundColor:"white", zIndex: 1000}}>
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
    <footer style = {{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center", backgroundColor:"rgba(11, 76, 149, 1)", color:"white", position:"fixed", width: "100%", bottom: 0, paddingBlock: 15}}>
      <img src = {BeepBop} style = {{height: 61, position:"absolute", left: 25 }} />
      <h3>© Kappa Theta Pi 2025. All rights reserved.</h3>
      <img src = {BeepBop} style = {{height: 61, position:"absolute", right: 25 }} />
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
 </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
