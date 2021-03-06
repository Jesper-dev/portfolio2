import "./styles/app.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HomePage } from "./components/HomePage";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { ProjectsPage } from "./components/projects/ProjectsPage";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { init } from "emailjs-com";
import { emailjsObj } from "./keys";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    init(emailjsObj.userid);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pageContainer">
        {/* Componentes goes here */}
        <HomePage />
        <About />
        <Skills />
        <ProjectsPage />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
