//import React from "react";
import Projects from "./components/Projects";
//import { read } from "./components/supabase/functions";
import "./styles.scss";
import {GraphCanvas} from "reagraph"
function App() {
  // will implemnent later
  //const filter = ["Computer Science", "Data Science", "Business", "Research"];



  return (
    <div className="App">
       <h1>Hello Universe</h1>

<div>
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
    </div>
  
  );
}

export default App;
