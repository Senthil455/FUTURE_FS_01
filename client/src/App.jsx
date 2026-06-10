import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Senthil Raja R | AI Automation Engineer | Backend Developer</title>
        <meta name="description" content="AI Automation Engineer & Backend Developer | Building AI-powered automation workflows, conversational AI apps, and scalable backend systems" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
