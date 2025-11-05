 
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
import { useNavigate, useNavigation } from 'react-router-dom';

export default function Members() {
//testing supabase: 
const [searchBarCont, setSearchBarCont] = useState(""); 
const [brothers, setBrothers] = useState([]);
const [filterPopUp, setFilterPopUp] = useState(false); 
const [brotherHovered, setBrotherHovered] = useState(-1); 
   const nav = useNavigate();


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
    
    
    <div className="App" style = {{display:"flex", flexDirection:"row", columnGap: 100, justifyContent:"center"}}>

 
   
          
   
     <div  className = "listContainer" style = {{rowGap: 0, display:"flex", flexDirection:"column"}}>
     {
     brothers.map((itm, idx) =>{
        return(
            <div onClick={() => nav("/membersView")} onMouseOut = {() => setBrotherHovered(-1)} onMouseOver = {() => setBrotherHovered(idx)} className = "brotherRow" style = {{opacity: brotherHovered == idx && brotherHovered>-1? 1 : brotherHovered > -1? .75 : 1,  transitionDuration:1, textAlign:"center", display:"flex", backgroundColor:"transparent", alignItems:"center", borderBottom: idx < (brothers.length -1)? "solid black .5px" : "", paddingBlock: 15, flexDirection:"row", justifyContent:"space-between", paddingInline: 25, columnGap: 200}}>
            <img src = {slide5} height={75}/>
 
                 <h2>{itm['Brother Name']}</h2>
                  <h2 style = {{fontSize: 17, color: "rgba(0,0,0,.75)"}}>Majr, YR, Class</h2>
              
           
                 
                
         </div>
        )
     })
     }
     </div>


          
     <div className = "filterSideBar" style = {{display:"flex",  rowGap: 25, width: 200, position:"relative", flexDirection:"column", backgroundColor:"transparent", padding: 1}}>
 <SearchInput 
     style = {{
        fontSize: 15,
     
        
        border: "none", position:"relative", backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 1, paddingInline: 20,paddingBlock: 5}}
     />
      
 
   <div>
    <label>Grad Year</label>
    <select title='Grad Year'>
            <option>Any</option>
            <option>2028</option>
            <option>2027</option>
            <option>2026</option>
            <option>2025</option>
        </select>
        </div>

<div>
    <label>Class</label>
        <select>
                <option>Any</option>
            <option>Zeta Class</option>
            <option>Epsilon Class</option>
            <option>Delta Class</option>
            <option>Gamma Class</option>
            <option>Beta Class</option>
            <option>Alpha Class</option>
            <option>Founding Class</option>
        </select>
</div>

<div>
    <label>Major</label>
            <select>
                   <option>Any</option>
                   <option>E-Board</option>
            <option>Membership</option>
            <option>Pphilantropy</option>
            <option>Finance</option>
            <option>Technical Developemnt</option>
            <option>Proffesional Developemnt</option>
        </select>
</div>

<div>
    <label>Comittee</label>
        <select>
                  <option>Any</option>
                   <option>E-Board</option>
            <option>Membership</option>
            <option>Pphilantropy</option>
            <option>Finance</option>
            <option>Technical Developemnt</option>
            <option>Proffesional Developemnt</option>
        </select>
</div>


</div>
 

    </div>
     </>
  );
}