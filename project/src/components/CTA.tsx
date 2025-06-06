import React, { useState } from 'react';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to a backend here
    setSubmitted(true);
  };
  
  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-purple-900/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[60%] bg-teal-900/20 blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900/95 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Early Access Program
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Join the NeuroSync Revolution
              </h2>
              
              <p className="mt-4 text-lg text-gray-300">
                Be among the first to experience the power of a unified cognitive layer for your digital life. Limited spots available for our beta program.
              </p>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20 flex items-center gap-2 justify-center"
                    >
                      Get Early Access
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-8 bg-slate-800/80 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <p className="text-white">
                    Thanks! We'll notify you when your access is ready.
                  </p>
                </div>
              )}
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckMarkIcon className="h-4 w-4 text-purple-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckMarkIcon className="h-4 w-4 text-purple-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckMarkIcon className="h-4 w-4 text-purple-400" />
                  <span>Free 14-day trial</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-full">
              <div className="h-full min-h-[400px] bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 md:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 h-40 w-40 bg-purple-600/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
                  
                  {/* Testimonial card */}
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-slate-800 shadow-xl relative z-10 max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                        SH
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Sarah Henderson</h4>
                        <p className="text-sm text-gray-400">Product Designer</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 italic">
                      "NeuroSync has transformed how I work. No more context switching between apps trying to find information. It's like having a second brain that actually understands what I'm working on!"
                    </p>
                    
                    <div className="mt-4 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="mt-3 text-gray-400">
              Everything you need to know about NeuroSync
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FAQ 
              question="How does NeuroSync protect my privacy?" 
              answer="NeuroSync uses end-to-end encryption and a local-first architecture. Your data is processed on your device first, and you have full control over what is shared with the cloud. We follow zero-knowledge principles, meaning we cannot access your actual data content."
            />
            
            <FAQ 
              question="Which apps does NeuroSync currently support?" 
              answer="We currently support Gmail, Google Calendar, Slack, Notion, Google Drive, and WhatsApp (beta). We're rapidly adding more integrations including Microsoft products, Zoom, Linear, GitHub, Figma, and other productivity tools."
            />
            
            <FAQ 
              question="Do I need to install anything?" 
              answer="NeuroSync works as both a web application and a desktop app (Windows, macOS, Linux). For the best experience and privacy, we recommend the desktop app which enables more local processing capabilities."
            />
            
            <FAQ 
              question="How is this different from regular search?" 
              answer="Unlike traditional search, NeuroSync understands context across apps. It can connect related information even when there are no direct keyword matches. It also provides proactive suggestions based on your current context and work patterns."
            />
            
            <FAQ 
              question="Is there a mobile app?" 
              answer="Yes! We offer mobile apps for iOS and Android that sync with your desktop experience. The mobile apps are primarily for querying your knowledge graph and receiving contextual notifications."
            />
            
            <FAQ 
              question="What happens if I cancel my subscription?" 
              answer="If you cancel, you'll still have access until the end of your billing period. You can export all your data anytime. The free plan will always be available with core functionality."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-medium text-white">{question}</h4>
        <div className={`h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 text-gray-300 border-t border-slate-800">
          {answer}
        </div>
      )}
    </div>
  );
};

// Import missing icons
const CheckMarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default CTA;