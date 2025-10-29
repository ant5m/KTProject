import "../../styles.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/App.css";
import Members from "./Members";
// Define the badge class mapping

createRoot(document.getElementById("rootM")!).render(
  <StrictMode>
    <Members/>
  </StrictMode>
);
