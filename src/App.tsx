import React from "react";
import "./styles/app.scss";
import { HomePage } from "./components/HomePage";
import { Skills } from "./components/Skills";
import { About } from "./components/About";

function App() {
  return (
    <main className="pageContainer">
      {/* Componentes goes here */}
      <HomePage />
      <About />
      <Skills />
    </main>
  );
}

export default App;
