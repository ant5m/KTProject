
 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import slide5 from "../assets/slide5.png"
import Anthony from "../assets/anthony.jpeg"
import Proj1 from "../assets/proj1.jpeg"
import { useNavigate } from 'react-router-dom';

import PeterEmero from "../assets/slide11.png"
export default function MembersView(){
    const [hovered, setHovered] = useState(Array(10).fill(false));
    return(
    <div className="App" style = {{display:"flex", flexDirection:"row", columnGap: 100, justifyContent:"center"}}>
<div style = {{display:"flex", flexDirection:"column", textAlign:"center", rowGap: 25}}>
<div
style = {{
    display:"flex",
    flexDirection:"row",
    columnGap: 25,
   justifyContent:"center",
   overflow:"hidden",
   maxWidth:"100%",
   paddingInline: 25,
   textAlign:"left"
}}>
      
    <img src = {PeterEmero}  height = {300} />

    <div style = {{display:"flex", flexDirection:"column", rowGap: 0 }}>
    <h2>Brother Name</h2>
    <p>KTP Class : Year</p>
    <p>Posittion</p>
    <p>Home Town</p>
    <h4 style ={{position:"relative",}}>41 Projects 700 likes</h4>
    </div>

</div>


      <p style = {{maxWidth: "65%", alignSelf:"center", textAlign:"left", textIndent: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nunc felis, gravida laoreet ipsum commodo bibendum. Suspendisse a arcu malesuada, viverra quam sit amet, mollis ipsum. Suspendisse potenti. Phasellus justo diam, venenatis luctus fringilla non, lacinia et justo. Aenean ante tortor, viverra et sapien a, vehicula porta libero. In.</p>
<div style = {{height: 1, backgroundColor:"rgba(16, 68, 129, 1)", width: "75%", alignSelf:"center", marginBottom: 20}}></div>

<div style = {{display:"flex", flexDirection:"column", rowGap: 100, paddingBottom: 125}}>
    {
        Array(10).fill(0).map((itm, idx) =>{
            return(
                <div className = "projViewContainer" style = {{backgroundColor:"transparent", color: "rgba(11, 76, 149, 1)", textAlign:"left", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", alignContent:"center", columnGap: 100}}>

                             <div className="image-wrapper" onMouseEnter={() => setHovered(prev => prev.map((v, i) => i === idx ? true : v))} onMouseLeave={() => setHovered(prev => prev.map((v, i) => i === idx ? false : v))}>
                             <img src ={Proj1} height = {300} style = { {zIndex: 5, cursor:"pointer", alignSelf:"center", position:"relative", bottom: -39}}/>
                             {hovered[idx] && <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '1.2rem', fontWeight: 'bold'}}>Visit</div>}
                             </div>


                            


                       <div style = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <h1 style = {{cursor:"pointer", textDecoration:"underline", textAlign:"left", alignSelf:"flex-start"}}>Eco Friendly Ballon</h1>
                    <p style = {{ width: 500, textAlign:"left", alignSelf:"center", backgroundColor:"transparent"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nunc felis, gravida laoreet ipsum commodo bibendum. <br/>  <br/> Suspendisse a arcu malesuada, viverra quam sit amet, mollis ipsum. Suspendisse potenti. Phasellus justo diam, venenatis luctus fringilla non, lacinia et justo. Aenean ante tortor, viverra et sapien a, vehicula porta libero. In</p>
                  </div>
                
                </div>
            )
        })
    }
</div>

</div>

        </div>

    )
}