 
import '../App.css';
import Logo from "../assets/logo.png"; 
import BeepBop from "../assets/beepBop.png"; 
import { read } from '../components/supabase/functions';
import { useState } from 'react';
import SearchBar from "react-js-search"; 
import SearchInput from "react-search-input"; 


export default function Members() {
//testing supabase: 
const [searchBarCont, setSearchBarCont] = useState(""); 
const [brothers, setBrothers] = useState(""); 

 read("Members")
  .then((resp) =>{
    //alert(JSON.stringify(resp))
    setBrothers(resp); 
  })
  .catch((e) =>{
    alert(e.message)
  });

  const testArr = [1,1,1,1,1]; 
 
  return (
    <div className="App" style = {{paddingBlock: 15}}>

          <SearchInput 
     style = {{border: "none", position:"absolute", right: 25, backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: 10, paddingInline: 20,paddingBlock: 2}}
     />

     <div className = "listContainer" style = {{paddingBlock: 10}}>
     {
     testArr.map((itm, idx) =>{
        return(
            <div style = {{borderBlockWidth: 1, borderBlockColor:"rgba(206, 206, 206, 1)", borderBlockStyle:"solid", paddingBlock: 5}}>
                <h1>Name</h1>
                </div>
        )
     })
     }
     </div>

    </div>
  );
}