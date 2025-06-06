import React from 'react';
import { Brain, Link, Database, Shield, Code } from 'lucide-react';

// Define icon components first
const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 22H5a2 2 0 0 1-2-2v-4m6 6h10a2 2 0 0 0 2-2v-4"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const workflowSteps = [
  {
    icon: <CloudIcon className="h-8 w-8 text-blue-400" />,
    title: "Data Collection",
    description: "Connect your apps and gather data"
  },
  {
    icon: <FilterIcon className="h-8 w-8 text-purple-400" />,
    title: "Processing & Analysis",
    description: "Extract meaning and create embeddings"
  },
  {
    icon: <NetworkIcon className="h-8 w-8 text-teal-400" />,
    title: "Knowledge Graph",
    description: "Build connections between entities"
  },
  {
    icon: <DatabaseIcon className="h-8 w-8 text-amber-400" />,
    title: "Storage",
    description: "Securely store in your private vault"
  },
  {
    icon: <BrainIcon className="h-8 w-8 text-pink-400" />,
    title: "Neural Interface",
    description: "Access via natural language"
  }
];

const ProcessCard: React.FC<{
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ step, icon, title, description }) => (
  <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-purple-500/30 transition-all group relative overflow-hidden">
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent group-hover:from-purple-600/30 transition-all"></div>
    
    <div className="bg-slate-800 h-10 w-10 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    
    <div className="absolute top-6 right-6 h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-purple-400 border border-purple-500/30">
      {step}
    </div>
    
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-2">
    <div className="h-5 w-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-3 w-3 text-teal-400" />
    </div>
    <span className="text-gray-300 text-sm">{children}</span>
  </li>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 relative bg-slate-950/50">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              How NeuroSync Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Powered by advanced AI, secure integration, and privacy-first architecture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ProcessCard
            step="1"
            icon={<Link className="h-8 w-8" />}
            title="Connect Your Apps"
            description="Securely connect your digital life through our integration layer. We support Gmail, Notion, Slack, Drive, Calendar, WhatsApp, and more."
          />
          
          <ProcessCard
            step="2"
            icon={<Database className="h-8 w-8" />}
            title="Build Your Knowledge Graph"
            description="Our AI analyzes your content and builds a comprehensive knowledge graph, connecting people, topics, files, and conversations."
          />
          
          <ProcessCard
            step="3"
            icon={<Brain className="h-8 w-8" />}
            title="Unlock Neural Powers"
            description="Access your enhanced digital memory through natural language, get contextual suggestions, and visualize your digital footprint."
          />
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Built with cutting-edge technology
            </h3>
            <p className="mt-3 text-gray-400">
              Our architecture is designed for speed, security, and privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
              <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-400" />
                Privacy-First Architecture
              </h4>
              
              <ul className="space-y-3">
                <FeatureListItem>
                  End-to-end encryption for all your data
                </FeatureListItem>
                <FeatureListItem>
                  Local-first processing with Tauri/Electron
                </FeatureListItem>
                <FeatureListItem>
                  Zero-knowledge architecture - we can't see your data
                </FeatureListItem>
                <FeatureListItem>
                  Full control over what apps connect and what data is processed
                </FeatureListItem>
              </ul>
            </div>
            
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
              <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-400" />
                Technical Stack
              </h4>
              
              <ul className="space-y-3">
                <FeatureListItem>
                  Backend: Node.js + PostgreSQL + Neo4j (graph database)
                </FeatureListItem>
                <FeatureListItem>
                  AI: Embeddings via OpenAI/Mistral + Weaviate/Pinecone
                </FeatureListItem>
                <FeatureListItem>
                  Frontend: Next.js + Tailwind + WebSocket real-time updates
                </FeatureListItem>
                <FeatureListItem>
                  Authentication: OAuth2 with all major providers
                </FeatureListItem>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Visual workflow */}
        <div className="mt-20">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">How Your Data Flows</h3>
            
            <div className="relative">
              {/* Desktop workflow */}
              <div className="hidden md:block">
                <div className="grid grid-cols-5 gap-4">
                  {workflowSteps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-slate-800 flex items-center justify-center mb-3">
                          {step.icon}
                        </div>
                        <h4 className="text-sm font-medium text-white mb-1">{step.title}</h4>
                        <p className="text-xs text-gray-400">{step.description}</p>
                      </div>
                      
                      {index < workflowSteps.length - 1 && (
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-800 -z-10" style={{ transform: `translateX(${10 + (index * 20)}%)` }}></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              {/* Mobile workflow */}
              <div className="md:hidden space-y-6">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(step.icon as React.ReactElement, { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;