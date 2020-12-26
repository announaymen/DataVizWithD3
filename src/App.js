import React from "react";
import { D3BarGraph } from "./BarGraph";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>TP InfoViS </h1>
      <h3>
        Cette visualisation a été créée avec la bibliothèque D3 et React et a
        été déployée sur Heroku <br />
        pour voir le code source cliquer &nbsp;
        <a href="https://github.com/announaymen/DataVizWithD3" target="_blank">
          ici
        </a>
      </h3>
      <p>
        {" "}
        - ANNOUN Aymen <br /> - BENDAHO Riyadh{" "}
      </p>
      <D3BarGraph />
      <br></br>
      <br></br>

      <br></br>
      <br></br>
    </div>
  );
}
