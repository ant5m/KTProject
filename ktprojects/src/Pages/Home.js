 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 

export default function Home() {
//testing supabase: 
const [searchBarCont, setSearchBarCont] = useState(""); 
 
  return (
    <div className="App">
     <h1 style = {{color: "black"}}>Home</h1>
    </div>
  );
}