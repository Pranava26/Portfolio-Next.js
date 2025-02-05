import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Skills/>
      <Projects limit={4} />
      <Contact/>
    </div>
  );
}
