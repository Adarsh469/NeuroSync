import React from 'react';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-7 w-7 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                NeuroSync
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              A cognitive sync engine for your digital life. Connect your tools, enhance your memory, and work smarter.
            </p>
            
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Github className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Mail className="h-5 w-5" />} href="#" />
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <FooterLink href="#features">Features</FooterLink>
                <FooterLink href="#how-it-works">How It Works</FooterLink>
                <FooterLink href="#integrations">Integrations</FooterLink>
                <FooterLink href="#pricing">Pricing</FooterLink>
                <FooterLink href="#">Roadmap</FooterLink>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <FooterLink href="#">Documentation</FooterLink>
                <FooterLink href="#">API Reference</FooterLink>
                <FooterLink href="#">Guides</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NeuroSync AI. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href} 
    className="h-10 w-10 rounded-full bg-slate-800 hover:bg-purple-500/20 border border-slate-700 hover:border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all"
  >
    {icon}
  </a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-purple-400 transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;