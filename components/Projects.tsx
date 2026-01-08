import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS, COMMUNITY_CONTRIBUTIONS } from '../constants';

const ProjectVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure the video is muted for autoplay to work
      video.muted = true;
      // Attempt to play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video autoplay failed:", error);
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      // Keep attributes for SSR/initial render
      autoPlay 
      className="w-full h-full object-cover rounded transition-all duration-500"
    />
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-highlight font-bold mr-6">
            <span className="text-accent text-2xl mr-2">03.</span>
            Latest I've Built
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <ul className="grid gap-24">
          {PROJECTS.map((project, index) => (
            <li key={index} className="relative grid md:grid-cols-12 gap-6 items-center">
              {/* Project Media (Image or Video) */}
              <div className={`md:col-span-7 relative group ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full h-full relative rounded overflow-hidden shadow-xl"
                 >
                    {/* Dark overlay that disappears on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300 z-10 pointer-events-none"></div>
                    
                    {project.mediaType === 'video' ? (
                      <ProjectVideo src={project.mediaSrc} />
                    ) : (
                      <img 
                        src={project.mediaSrc} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded transition-all duration-500"
                      />
                    )}
                 </a>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-5 z-20 ${index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1 md:text-left'}`}>
                <p className="font-mono text-accent text-sm mb-2">Featured Project</p>
                <h3 className="font-serif text-2xl font-bold text-highlight mb-4 hover:text-accent transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                
                <div className="bg-surface p-6 rounded shadow-xl text-muted text-sm leading-relaxed mb-4 hover:text-white transition-colors">
                  {project.description}
                </div>

                <ul className={`flex flex-wrap gap-4 text-xs font-mono text-muted mb-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {/* Neutralized GitHub Icon - purely decorative/disabled state */}
                  <span className="text-muted/30 cursor-default" aria-hidden="true">
                    <Github size={20} />
                  </span>
                  
                  {/* Fixed External Link */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-highlight hover:text-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* GitHub Contribution Graph */}
        <div className="mt-32">
          <div className="flex items-center mb-8 justify-center">
            <div className="h-px bg-white/10 w-8 md:w-12 mr-3 md:mr-4"></div>
            <h3 className="font-serif text-xl md:text-2xl text-highlight font-bold text-center">
              My GitHub Contributions
            </h3>
            <div className="h-px bg-white/10 w-8 md:w-12 ml-3 md:ml-4"></div>
          </div>
          
          <div className="w-full overflow-hidden rounded-xl bg-surface/50 p-6 md:p-8 shadow-2xl border border-white/5 hover:border-accent/20 transition-all duration-500 group">
             <a href="https://github.com/husaynirfan1" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://ghchart.rshah.org/2B2B27/husaynirfan1" 
                  alt="Husayn's GitHub Contribution Graph" 
                  className="w-full h-auto filter invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
             </a>
             <div className="mt-6 text-center">
                <a 
                  href="https://github.com/husaynirfan1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-highlight transition-colors"
                >
                  <Github size={16} />
                  <span>@husaynirfan1</span>
                </a>
             </div>
          </div>
        </div>

        {/* Community Contributions */}
        <div className="mt-32">
          <div className="flex items-center mb-12 justify-center">
                <div className="h-px bg-white/10 w-8 md:w-12 mr-3 md:mr-4"></div>
                <h3 className="font-serif text-xl md:text-2xl text-highlight font-bold text-center">
                  Community Contributions
                </h3>
                <div className="h-px bg-white/10 w-8 md:w-12 ml-3 md:ml-4"></div>
          </div>

           <div className="grid md:grid-cols-2 gap-8">
              {COMMUNITY_CONTRIBUTIONS.map((contribution, index) => (
                 <a 
                   key={index}
                   href={contribution.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-surface/30 rounded-lg overflow-hidden border border-white/5 hover:border-accent/30 hover:bg-surface/50 transition-all duration-300 flex flex-col h-full"
                 >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                      <img 
                        src={contribution.mediaSrc} 
                        alt={contribution.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                         <h4 className="font-serif text-xl font-bold text-highlight group-hover:text-accent transition-colors">
                           {contribution.title}
                         </h4>
                         <ArrowUpRight className="text-muted group-hover:text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                      </div>
                      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                        {contribution.description}
                      </p>
                    </div>
                 </a>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
