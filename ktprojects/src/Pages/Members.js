 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import slide5 from "../assets/slide5.png"
import {IoFilter, IoExit} from "react-icons/io5"; 
import { FilterPopUp } from '../components/supabase/popUps/filter';

export default function Members() {
//testing supabase: 
const [searchBarCont, setSearchBarCont] = useState(""); 
const [brothers, setBrothers] = useState([]);
const [filterPopUp, setFilterPopUp] = useState(false); 

function triggerFilterPopUp(){
    setFilterPopUp(true); 

}
 read("Members")
  .then((resp) =>{
    //alert(JSON.stringify(resp))
    setBrothers(resp); 
  })
  .catch((e) =>{
    alert(e.message);

  });

  const testArr = [1,1,1,1,1]; 
 
  return (
    <>

    <div style = {{ display:"flex", backgroundColor: "transparent", width:"100%", transitionDuration: ".5s", alignItems:"center", justifyContent:"center", alignContent:"center", position:"absolute", top: filterPopUp? 100 : -700}}>

          <div onClick={() =>{}} 
          className = "filterCont"
          style = {{display:"flex", height:500, width: 500, paddingRight: 15, flexDirection:"column", zIndex: 1000, backgroundColor:"white", transitionDuration:"1s", boxShadow: "1px 1px 11px .2px black", borderRadius: 25, position:"relative", alignSelf:"center", justifyContent:"center", alignItems:"center", textAlign:"center", alignContent:"center", }}>
    
    <div>
     <h1>Class</h1>
       <ul className = "filterUL">
        <li>Alpha</li>
        <li>Alpha</li>
        <li>Alpha</li>
        <li>Alpha</li>
        <li>Alpha</li>
       </ul>
       </div>

<div>
 
     <h1 style = {{position:"relative", left: -49}}>Major(s)</h1>
        <ul className = "filterUL">
        <li>CS</li>
        <li>CS</li>
        <li>CS</li>
        <li>CS</li>
        <li>CS</li>
       </ul>
</div>

<div>

     <h1>Grad Yr</h1>
        <ul className = "filterUL">
        <li>2028</li>
        <li>2028</li>
        <li>2028</li>
        <li>2028</li>
        <li>2028</li>
       </ul>
       
       </div>
        <button onClick={() => setFilterPopUp(false)} className = "applyFilters">Apply</button>
        </div> 
    </div>
    
    
    <div className="App" >
 
<div style = {{position:"relative", backgroundColor:"transparent", paddingBottom: 34, display:"flex", flexDirection:"row", columnGap: 200, justifyContent:"space-evenly"}}>
 <SearchInput 
     style = {{
        fontSize: 15,
        left: "3em",
        border: "none", position:"relative", backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 1, paddingInline: 20,paddingBlock: 5}}
     />

     <IoFilter onClick = {triggerFilterPopUp} size = {20} className='filter' color = 'rgb(13, 69, 172)' style = {{position:"relative", cursor:"pointer"}}/>
</div>
 
     <br/>
 
          

     <div  className = "listContainer" style = {{rowGap: 10, display:"flex", flexDirection:"column"}}>
     {
     testArr.map((itm, idx) =>{
        return(
            <div style = {{display:"flex", backgroundColor:"transparent", alignItems:"center", flexDirection:"row", justifyContent:"space-evenly",}}>
            <img src = {slide5} height={75}/>

                <div style = {{textAlign:"left", display:"flex", flexDirection:"column", alignItems:"center",}}>
              
              <div style = {{justifyContent: "left", alignItems:"left", textAlign:"left", left: -100, position:"relative"}}>
                 <h2>Charlotte Vram</h2>
                  <h2 style = {{fontSize: 17, color: "rgba(0,0,0,.75)"}}>Majr, YR, Class</h2>
              </div>
           
                 
                    </div>
         </div>
        )
     })
     }
     </div>

     

    </div>
     </>
  );
}