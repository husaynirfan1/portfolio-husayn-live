import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 text-center scroll-mt-24">
      <div className="max-w-2xl mx-auto mb-24">
        <p className="text-accent font-mono mb-4">04. What's Next?</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight mb-6">Get In Touch</h2>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          I am currently open for new opportunities in software development, AI engineering, or avionics support. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a 
          href="mailto:mhusaynirfan@gmail.com"
          className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300 font-medium"
        >
          Say Hello
        </a>
      </div>

      <div className="flex justify-center space-x-8 mb-8 md:hidden">
         {SOCIAL_LINKS.map((social) => (
           <a 
            key={social.label} 
            href={social.href} 
            className="text-muted hover:text-accent transition-colors"
            aria-label={social.label}
           >
             <social.icon size={20} />
           </a>
         ))}
      </div>

      <div className="text-sm font-mono text-muted hover:text-accent transition-colors cursor-default">
        <p>Built by Muhammad Husayn Irfan</p>
      </div>
    </footer>
  );
};

export default Footer;