import React from 'react';
import { Zap, Check, MailOpen, Calendar, MessageSquare, FileText, HardDrive, Globe } from 'lucide-react';

// Custom icon components moved to the top
const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MessageCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const Video = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z"/>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
  </svg>
);

const LineChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const Code = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const Pen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
);

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Connect Your Entire Digital Life
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            NeuroSync seamlessly integrates with all the tools you already use, creating a unified cognitive layer.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard key={index} {...integration} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Don't see your favorite tool? We're constantly adding new integrations.
          </p>
          <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all flex items-center gap-2 mx-auto">
            <Zap className="h-5 w-5 text-purple-400" />
            Request an Integration
          </button>
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white">
              Choose Your Plan
            </h3>
            <p className="mt-3 text-gray-400">
              Start building your neural connections today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Explorer"
              price="Free"
              description="Perfect for personal use and exploring the core features"
              features={[
                "Connect 3 apps",
                "7-day history",
                "Basic search functionality",
                "Standard response time"
              ]}
              cta="Get Started"
              highlighted={false}
            />
            
            <PricingCard
              title="Professional"
              price="$12"
              period="/month"
              description="For power users who want to connect their entire digital workflow"
              features={[
                "Connect 10 apps",
                "30-day history",
                "Advanced search & filtering",
                "Contextual nudges",
                "Fast response time"
              ]}
              cta="Start Free Trial"
              highlighted={true}
            />
            
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For teams and organizations with advanced security needs"
              features={[
                "Unlimited app connections",
                "Unlimited history",
                "All features included",
                "Advanced analytics",
                "Priority support",
                "Team collaboration features"
              ]}
              cta="Contact Sales"
              highlighted={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const integrations = [
  {
    name: "Gmail",
    icon: <MailOpen className="h-6 w-6" />,
    color: "bg-red-600",
    status: "Live"
  },
  {
    name: "Google Calendar",
    icon: <Calendar className="h-6 w-6" />,
    color: "bg-blue-600",
    status: "Live"
  },
  {
    name: "Slack",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-purple-600",
    status: "Live"
  },
  {
    name: "Notion",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-gray-800",
    status: "Live"
  },
  {
    name: "Google Drive",
    icon: <HardDrive className="h-6 w-6" />,
    color: "bg-yellow-600",
    status: "Live"
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "bg-green-600",
    status: "Beta"
  },
  {
    name: "Microsoft Outlook",
    icon: <Mail className="h-6 w-6" />,
    color: "bg-blue-700",
    status: "Coming Soon"
  },
  {
    name: "Zoom",
    icon: <Video className="h-6 w-6" />,
    color: "bg-blue-500",
    status: "Coming Soon"
  },
  {
    name: "Linear",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-violet-600",
    status: "Coming Soon"
  },
  {
    name: "GitHub",
    icon: <Code className="h-6 w-6" />,
    color: "bg-gray-700",
    status: "Coming Soon"
  },
  {
    name: "Figma",
    icon: <Pen className="h-6 w-6" />,
    color: "bg-pink-600",
    status: "Coming Soon"
  },
  {
    name: "Twitter",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-blue-400",
    status: "Coming Soon"
  }
];

const IntegrationCard: React.FC<{
  name: string;
  icon: React.ReactNode;
  color: string;
  status: string;
}> = ({ name, icon, color, status }) => (
  <div className="bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/30 transition-all group">
    <div className="flex items-center gap-3">
      <div className={`${color} h-10 w-10 rounded-md flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-white">{name}</h3>
        <div className="flex items-center mt-1">
          {status === "Live" ? (
            <>
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-green-400">Live</span>
            </>
          ) : status === "Beta" ? (
            <>
              <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
              <span className="text-xs text-amber-400">Beta</span>
            </>
          ) : (
            <>
              <div className="h-2 w-2 rounded-full bg-gray-500 mr-2"></div>
              <span className="text-xs text-gray-400">Coming Soon</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PricingCard: React.FC<{
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}> = ({ title, price, period = "", description, features, cta, highlighted }) => (
  <div 
    className={`rounded-2xl overflow-hidden border ${
      highlighted 
        ? 'border-purple-500 relative bg-gradient-to-b from-purple-900/30 to-slate-900' 
        : 'border-slate-700 bg-slate-900/60'
    } backdrop-blur-sm`}
  >
    {highlighted && (
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400"></div>
    )}
    
    <div className="p-6">
      <h3 className={`text-xl font-bold ${highlighted ? 'text-purple-400' : 'text-white'}`}>
        {title}
      </h3>
      
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        {period && <span className="ml-1 text-xl text-gray-400">{period}</span>}
      </div>
      
      <p className="mt-4 text-gray-400">
        {description}
      </p>
      
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={`h-5 w-5 rounded-full ${highlighted ? 'bg-purple-500/20' : 'bg-slate-800'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
              <Check className={`h-3 w-3 ${highlighted ? 'text-purple-400' : 'text-teal-400'}`} />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
            highlighted 
              ? 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/20' 
              : 'bg-slate-800 hover:bg-slate-700 text-white'
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  </div>
);

export default Integrations;