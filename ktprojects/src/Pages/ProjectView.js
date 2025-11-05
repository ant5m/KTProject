 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 
import slide5 from "../assets/slide5.png"
import {GraphCanvas} from "reagraph";
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
export default function Projects({params}) {
   const testArr = [1,1,1,1,1]; 
   const {state} = useLocation();
    
   const projectMetadata = state.payload; 


   
   
 const testUI = (
       <p>props passed on: {
 
 
            <>
            <h1>{projectMetadata.title}</h1>
            <img src = {projectMetadata.img}/>
            <p>{projectMetadata.description}</p>
            </>
        
    
    }</p>
 );

  return (
    <div className="App" >

        <div 
        style = {{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            paddingInline: 25, 
            borderBottom:"solid rgba(1,1,1,.25) 1px",
            paddingBottom: 15, 
            marginInline: 25,
            
        }}
        className = "headerRepo" 
        >
            <img style = {{borderRadius: 100}} src = {projectMetadata.img} width={75}/>
            <h2 style = {{fontSize: 20}}>{projectMetadata.title}</h2>
            </div>
 
   

   <div 
   style = {{
   position:"relative",
   display:"flex",
   height: 500,
   width: "100%",
   padding: 5,

   }}>
       <GraphCanvas 
       renderNode={({node}) => {
        return <mesh>
            <torusKnotGeometry attach={"geometry"} args = {[node.size, 1.25, 50, 8]}/>
            <meshBasicMaterial
            attach={"material"}
            color={"rgba(10, 80, 141, 1)"}

            transparent
            />
            </mesh>
       }}
       sizingType='centrality'
       sizingAttribute='70px'
       minNodeSize={10}
       
     theme={{ canvas: { 
        background: '#531111ff' }, 
        node: { 
            fill: '#7CA0AB', activeFill: '#1DE9AC', opacity: 1, selectedOpacity: 1, inactiveOpacity: 0.2, label: { color: '#2A6475', stroke: '#fff', activeColor: '#1DE9AC' }, subLabel: { color: '#ddd', stroke: 'transparent', activeColor: '#1DE9AC' } }, lasso: { border: '1px solid #55aaff', background: 'rgba(75, 160, 255, 0.1)' }, ring: { fill: '#D8E6EA', activeFill: '#1DE9AC' }, edge: { fill: '#D8E6EA', activeFill: '#1DE9AC', opacity: 1, selectedOpacity: 1, inactiveOpacity: 0.1, label: { stroke: '#fff', color: '#2A6475', activeColor: '#1DE9AC', fontSize: 6 }, subLabel: { color: '#ddd', stroke: 'transparent', activeColor: '#1DE9AC' } }, arrow: { fill: '#D8E6EA', activeFill: '#1DE9AC' }, cluster: { stroke: '#D8E6EA', opacity: 1, selectedOpacity: 1, inactiveOpacity: 0.1, label: { stroke: '#fff', color: '#2A6475' } } }}
      nodes={[
      {
        id: 'n-1',
        label: 'Project Name'
      },
      {
        id: 'n-2',
        label: 'Contributors/Team'
      },
      {
        id: 'n-3',
        label: 'Product'
      },
      {
        id: 'n-4',
        label: 'Governance'
      },
         {
        id: 'n-5',
        label: 'Media'
      }
    ]}
    edges={[
      {
        id: '1->2',
        source: 'n-1',
        target: 'n-2',
        label: 'Edge 1-2'
      },
      {
        id: '1->3',
        source: 'n-1',
        target: 'n-3',
        label: 'Edge 1-3'
      },
      {
        id: '1->4',
        source: 'n-1',
        target: 'n-4',
        label: 'Edge 1-4'
      },
    {
        id: '1->5',
        source: 'n-1',
        target: 'n-5',
        label: 'Edge 1-5'
      },
      
    ]}
       />
    </div>

    <div style = {{paddingInline: 0, borderTop:"solid rgba(1,1,1,.25) 1px", marginInline: 20}}>
        <h1 style = {{textAlign:"left", fontSize: 25, fontWeight: 340, color: "rgba(9, 69, 160, 1)"}}>Check out related projects</h1>
    </div>

       </div>
  );
}