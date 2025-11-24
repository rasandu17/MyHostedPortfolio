import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
