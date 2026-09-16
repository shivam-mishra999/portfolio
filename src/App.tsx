import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
