import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Awards } from './components/sections/Awards';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </>
  );
}

export default App;
