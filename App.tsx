import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialSidebars from './components/SocialSidebars';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-primary font-sans antialiased selection:bg-accent/30 selection:text-highlight">
      <Navbar />
      <SocialSidebars />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default App;