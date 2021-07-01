import "./styles/app.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HomePage } from "./components/HomePage";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { ProjectsPage } from "./components/projects/ProjectsPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="pageContainer">
      {/* Componentes goes here */}
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <ProjectsPage />
    </main>
  );
}

export default App;
