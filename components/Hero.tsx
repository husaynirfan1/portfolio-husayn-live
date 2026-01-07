import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-accent mb-6 font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hi, my name is
        </p>
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold text-highlight mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Husayn Irfan.
        </h1>
        <h2 className="font-serif text-3xl md:text-6xl lg:text-7xl font-bold text-muted mb-8 leading-[1.1] animate-slide-up" style={{ animationDelay: '0.3s' }}>
          I maintain simulators & craft apps.
        </h2>
        <p className="max-w-xl text-lg text-muted leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I'm an Avionics Engineering Graduate, Freelance Mobile App Developer, and AI/ML Enthusiast. I had experience in crafting user-friendly Android applications, RAG frameworks pipeline and of course, simulators!        </p>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#projects" 
            onClick={scrollToProjects}
            className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300 font-medium"
          >
            Check out my work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted hidden md:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;