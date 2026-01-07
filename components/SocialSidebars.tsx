import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialSidebars: React.FC = () => {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="hidden md:flex fixed bottom-0 left-12 flex-col items-center gap-6 text-muted z-50">
        {SOCIAL_LINKS.map((social) => (
          <a 
            key={social.label} 
            href={social.href} 
            className="hover:text-accent hover:-translate-y-1 transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
        <div className="w-px h-24 bg-muted/40 mt-4"></div>
      </div>

      {/* Right Sidebar - Email */}
      <div className="hidden md:flex fixed bottom-0 right-12 flex-col items-center gap-6 text-muted z-50">
        <a 
          href="mailto:mhusaynirfan@gmail.com" 
          className="writing-vertical hover:text-accent hover:-translate-y-1 transition-all duration-300 font-mono text-xs tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          mhusaynirfan@gmail.com
        </a>
        <div className="w-px h-24 bg-muted/40 mt-4"></div>
      </div>
    </>
  );
};

export default SocialSidebars;