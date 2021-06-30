import React from "react";
import "./styles/app.scss";
import { HomePage } from "./components/HomePage";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="pageContainer">
      {/* Componentes goes here */}
      <HomePage />
      <Skills />
    </main>
  );
}

export default App;
