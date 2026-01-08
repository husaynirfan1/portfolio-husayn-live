import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 1. Stop the browser from opening a new tab
    
    const fileUrl = "https://7z3tqrxfdnfbzols.public.blob.vercel-storage.com/resume/RESUME_LATEST_2025.pdf";
    const filename = "Husayn_Irfan_Resume.pdf"; // The name the user will see

    try {
      // 2. Fetch the file in the background
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      
      // 3. Convert it to a "Blob" (a raw file object)
      const blob = await response.blob();
      
      // 4. Create a temporary invisible link to trigger the download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename; // This forces the name and download
      document.body.appendChild(link);
      link.click();
      
      // 5. Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed, falling back to tab:', error);
      // Fallback: If fetch fails (rare), open in new tab so user still gets it
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <footer id="contact" className="py-24 px-6 text-center scroll-mt-24">
      <div className="max-w-2xl mx-auto mb-24">
        <p className="text-accent font-mono mb-4">04. What's Next?</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-highlight mb-6">Get In Touch</h2>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          I am currently open for new opportunities in software development, AI engineering, or avionics support. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:mhusaynirfan@gmail.com"
            className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300 font-medium w-full sm:w-auto"
          >
            Say Hello
          </a>
          
          {/* Updated Button with onClick handler */}
          <a 
            href="https://7z3tqrxfdnfbzols.public.blob.vercel-storage.com/resume/RESUME_LATEST_2025.pdf"
            onClick={handleDownload}
            className="inline-block border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300 font-medium w-full sm:w-auto cursor-pointer"
          >
            Download Resume
          </a>
        </div>
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
        <p>Built by Muhammad Husayn Irfan Mohammad Noor | Updated in 2026 </p>
      </div>
    </footer>
  );
};

export default Footer;
