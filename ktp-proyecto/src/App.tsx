//import React from "react";
import Projects from "./components/Projects";
import Members from "./Pages/Members/Members";
//import { read } from "./components/supabase/functions";
import "./styles.scss";
import {GraphCanvas} from "reagraph"
function App() {
  // will implemnent later
  //const filter = ["Computer Science", "Data Science", "Business", "Research"];


  /* 
  nod egraph: <div>
       <GraphCanvas 
        
      nodes={[
      {
        id: 'n-1',
        label: '1'
      },
      {
        id: 'n-2',
        label: '2'
      }
    ]}
    edges={[
      {
        id: '1->2',
        source: 'n-1',
        target: 'n-2',
        label: 'Edge 1-2'
      }
    ]}
       />
    </div>

  */

  return (
    <div className="App">
      
  <Projects/>
 
 
    </div>
  
  );
}

export default App;
