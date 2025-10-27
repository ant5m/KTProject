import React from "react";
import Projects from "./components/Projects";
import { read } from "./components/supabase/functions";
import "./styles.scss";

function App() {
  // will implemnent later
  //const filter = ["Computer Science", "Data Science", "Business", "Research"];

  return (
    <div className="App">
      <Projects />

    </div>
  );
}

export default App;
