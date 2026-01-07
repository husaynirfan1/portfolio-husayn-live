import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 bg-surface/30 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-highlight font-bold mr-6">
            <span className="text-accent text-2xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* --- Tree Navigation --- */}
          <div className="relative md:w-max">
            
            {/* Desktop: The Main Vertical Trunk Line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>

            <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-auto pb-4 md:pb-0">
              {EXPERIENCES.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    group relative 
                    px-5 py-3 
                    text-left font-mono text-sm 
                    transition-all duration-300 
                    whitespace-nowrap 
                    flex-shrink-0
                    
                    /* Mobile: Keep bottom border for tabs */
                    border-b-2 md:border-b-0
                    
                    /* Desktop: Remove borders, rely on tree structure */
                    md:border-none
                    md:pl-12
                    
                    ${activeTab === index 
                      ? 'text-accent border-accent' // Border only shows on mobile
                      : 'text-muted border-transparent hover:text-highlight'
                    }
                  `}
                >
                  {/* --- THE BRANCH (Desktop Only) --- */}
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    
                    {/* Horizontal Connector Line */}
                    <span 
                      className={`
                        absolute left-0 top-1/2 h-px transition-all duration-300
                        ${activeTab === index 
                          ? 'w-8 bg-accent' 
                          : 'w-4 bg-white/10 group-hover:w-6 group-hover:bg-white/30'
                        }
                      `}
                    ></span>

                    {/* The Node (Junction Point) */}
                    <span 
                      className={`
                        absolute top-1/2 -translate-y-1/2 transition-all duration-300 border
                        ${activeTab === index 
                           // Active: Diamond Shape
                          ? 'left-8 w-2 h-2 bg-bg border-accent rotate-45' 
                           // Inactive: Small Dot
                          : 'left-4 w-1 h-1 bg-white/10 border-transparent rounded-full group-hover:left-6'
                        }
                      `}
                    ></span>
                  </div>
                  
                  {/* Company Name */}
                  <span>{exp.company}</span>
                </button>
              ))}
            </div>
          </div>

          {/* --- Content Panel --- */}
          <div className="flex-1 min-h-[300px]">
            <div key={activeTab} className="animate-fade-in">
              <h3 className="text-xl text-highlight font-medium mb-1">
                {EXPERIENCES[activeTab].role} <span className="text-accent">@ {EXPERIENCES[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted mb-6">
                {EXPERIENCES[activeTab].period}
              </p>
              
              <div className="text-muted leading-relaxed mb-6">
                {EXPERIENCES[activeTab].description}
              </div>

              <div className="flex flex-wrap gap-3">
                {EXPERIENCES[activeTab].technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-accent border border-white/5 hover:border-accent/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;