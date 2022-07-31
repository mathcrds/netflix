import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Section } from "./Section";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <React.StrictMode>
      <App />

      {/* PRIMEIRO */}
      <Section
        side="left"
        h2="Aproveite na TV."
        p="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        img="src\assets\tv.png"
      />

      {/* SEGUNDO */}
      <Section
        side="right"
        h2="Baixe séries para assistir offline."
        p="Salve seus títulos favoritos e sempre tenha algo para assistir."
        img="src\assets\celular.jpg"
      />

      {/* TERCEIRO */}
      <Section
        side="left"
        h2="Assista quando quiser."
        p="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        img="src\assets\mac.png"
      />

      {/* QUARTO */}
      <Section
        side="right"
        h2="Crie perfis para crianças."
        p="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        img="src\assets\Kids.png"
      />
    </React.StrictMode>
  </div>
);
