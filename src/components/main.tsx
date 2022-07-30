import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Section } from "./Section";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <React.StrictMode>
      <App />
      <Section side="left" h2="" p="" img="src\assets\tv.png" />

      <Section side="right" h2="" p="" img="src\assets\celular.jpg" />

      <Section side="left" h2="" p="" img="src\assets\mac.png" />

      <Section side="right" h2="" p="" img="src\assets\celular.jpg" />
    </React.StrictMode>
  </div>
);

//img -> 4 tipos: TV - celular - Mac - Kids
