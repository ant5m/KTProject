 
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
export default function Projects() {
   const testArr = [
    {
        title: "Project1",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    },
     {
        title: "Project2",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    },
     {
        title: "Project3",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    },
     {
        title: "Project4",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    },
    {
        title: "Project4",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    },
    {
        title: "Project4",
        description: "To enhance the cosmic microwave background readings",
        img: Anthony
    }
   ]; 
   const nav = useNavigate();
   const [brotherHovered, setBrotherHovered] = useState(-1); 

  return (
    <div className="App" style = {{display:"flex", flexDirection:"row", columnGap: 100, justifyContent:"center"}}>
   
    
     
             
      
        <div  className = "listContainer" style = {{rowGap: 10, display:"flex", flexDirection:"column"}}>
        {
        testArr.map((itm, idx) =>{
           return(

            <div onClick = {() => {/* navigate to oproject dedicated page */ nav("/projectView", {state:{payload:itm}})}} onMouseOut = {() => setBrotherHovered(-1)} onMouseOver = {() => setBrotherHovered(idx)} className = "brotherRow" style = {{opacity: brotherHovered == idx && brotherHovered>-1? 1 : brotherHovered > -1? .75 : 1,  transitionDuration:1, textAlign:"center", display:"flex", backgroundColor:"transparent", alignItems:"center", borderBottom: idx < (testArr.length -1)? "solid black .5px" : "", paddingBlock: 15, flexDirection:"row", justifyContent:"space-between", paddingInline: 25, columnGap: 200}}>
               <img src = {itm.img} height={75}/>
    
                    <h2>{itm.title}</h2>
                     <h2 style = {{fontSize: 17, color: "rgba(0,0,0,.75)"}}>{itm.description}</h2>
                 
              
                    
                   
            </div>
           )
        })
        }
        </div>
   
   
             
        <div className = "filterSideBar" style = {{display:"flex",  rowGap: 25, width: 200, position:"relative", flexDirection:"column", backgroundColor:"transparent", padding: 1}}>
    <SearchInput 
    placeholder = "search porject"
        style = {{
           fontSize: 15,
        
           
           border: "none", position:"relative", backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 1, paddingInline: 20,paddingBlock: 5}}
        />
         
    
      <div>
       <label>Date</label>
       <select title='Grad Year'>
               <option>Any</option>
               <option>2028</option>
               <option>2027</option>
               <option>2026</option>
               <option>2025</option>
           </select>
           </div>
   
   <div>
       <label>Field</label>
           <select>
                   <option>Any</option>
               <option>Computer Science</option>
               <option>Mechanical Engineering</option>
               <option>Machine Learning</option>
               <option>Mobile Development</option>
               <option>Web Development</option>
               <option>Marketing</option>
               <option>Finance</option>
           </select>
   </div>
   
     
   
   
   </div>
    
   
       </div>
  );
}