
 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import slide5 from "../assets/slide5.png"
import Anthony from "../assets/anthony.jpeg"
import { useNavigate } from 'react-router-dom';

import PeterEmero from "../assets/slide11.png"
export default function MembersView(){
    return(
    <div className="App" style = {{display:"flex", flexDirection:"row", columnGap: 100, justifyContent:"center"}}>
<div
style = {{
    display:"flex",
    flexDirection:"row",
    columnGap: 25,
   justifyContent:"space-between",

}}>
    <img src = {PeterEmero} width = {100} />

    <div style = {{display:"flex", flexDirection:"column", }}>
    <h2>Brother Name</h2>
    <p>KTP Class : Year</p>
    <p>Posittion</p>
    <p>Home Town</p>
    </div>

    <div className = "stats" style = {{}}>
        <h4>41 Projects 700 likes</h4>
    </div>

</div>

        </div>

    )
}