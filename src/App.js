import React from "react";
import { D3BarGraph } from "./BarGraph";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>TP InfoViS </h1>
      <h2>
        pour voir le code source cliquer{" "}
        <a href="https://github.com/announaymen/DataVizWithD3">ici</a>{" "}
      </h2>
      <D3BarGraph />
    </div>
  );
}
