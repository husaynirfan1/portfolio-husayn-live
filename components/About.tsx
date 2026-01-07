import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-highlight font-bold mr-6">
            <span className="text-accent text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10 text-muted text-lg leading-relaxed">
            {/* Intro Text */}
            <div className="space-y-4">
              <p>
                Hello! My name is Husayn. I am a graduate of <span className="text-highlight">UniKL MIAT</span> with a degree in Aircraft Engineering Technology in Avionics.
              </p>
              <p>
                Beyond aviation, I have over 2 years of experience as a self-taught <span className="text-highlight">Freelance Mobile Android Developer</span>, crafting user-friendly applications using Android Studio and Firebase. My technical journey has also led me into the world of AI and Machine Learning, where I explore Large Language Models (LLMs), GenAI, RAG frameworks and fine-tuning methods.
              </p>
              <p>
                I have hands-on experience in simulator maintenance from my time at CAE Kuala Lumpur and PWN Excellence handling AW139 FFS, Boeing 737-NG FFS, Airbus A320 and A330 FFS.
              </p>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="font-serif text-xl text-highlight font-bold mb-6 flex items-center">
                Education
                <span className="ml-4 h-px bg-white/10 w-20"></span>
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h4 className="text-highlight font-medium text-base">Bachelor of Aircraft Engineering Technology in Avionics</h4>
                    <span className="text-sm font-mono whitespace-nowrap text-accent/80">2022 — 2025</span>
                  </div>
                  <p className="text-sm mb-1">Universiti Kuala Lumpur MIAT</p>
                  <p className="text-xs font-mono text-accent border border-accent/20 inline-block px-2 py-1 rounded">CGPA: 3.32</p>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                    <h4 className="text-highlight font-medium text-base">Diploma in Engineering Technology in Avionics Maintenance</h4>
                    <span className="text-sm font-mono whitespace-nowrap text-accent/80">2019 — 2022</span>
                  </div>
                  <p className="text-sm mb-1">Universiti Kuala Lumpur MIAT</p>
                  <p className="text-xs font-mono text-accent border border-accent/20 inline-block px-2 py-1 rounded">CGPA: 3.75</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="font-serif text-xl text-highlight font-bold mb-4 flex items-center">
                Certifications
                <span className="ml-4 h-px bg-white/10 w-20"></span>
              </h3>
              <ul className="list-none space-y-3 text-sm font-mono">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">▹</span>
                  <span>IBM AI Developer Professional Certificate <span className="text-muted/60 block md:inline md:ml-1">— IBM</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">▹</span>
                  <span>Building Generative AI-Powered Applications with Python <span className="text-muted/60 block md:inline md:ml-1">— IBM</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">▹</span>
                  <span>PowerShell for Automating Administration <span className="text-muted/60 block md:inline md:ml-1">— Packt</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">▹</span>
                  <span>Introduction to Networking and Storage <span className="text-muted/60 block md:inline md:ml-1">— IBM</span></span>
                </li>
                 <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">▹</span>
                  <span>Mobile Development and Javascript <span className="text-muted/60 block md:inline md:ml-1">— Meta</span></span>
                </li>
              </ul>
            </div>

            {/* Skills Section */}
            <div>
               <h3 className="font-serif text-xl text-highlight font-bold mb-4 flex items-center">
                Recent Technologies
                <span className="ml-4 h-px bg-white/10 w-20"></span>
              </h3>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {SKILLS.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

         <div className="relative group h-fit"> 
          <div className="relative z-10 rounded overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <img 
              src="https://raw.githubusercontent.com/husaynirfan1/portfolio-updated/main/huusaynnnnn.jpg?v=2"
              alt="Husayn Irfan" 
              className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Border frame behind image */}
          <div className="absolute inset-0 border-2 border-accent rounded z-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;