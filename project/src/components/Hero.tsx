import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Search, Link, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Neural network animation
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numNodes = 30;
    const connections: [number, number][] = [];
    
    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
    
    // Create connections (randomly connect some nodes)
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() < 0.1) { // 10% chance of connection
          connections.push([i, j]);
        }
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)'; // Purple with low opacity
      ctx.lineWidth = 1;
      
      for (const [i, j] of connections) {
        const nodeA = nodes[i];
        const nodeB = nodes[j];
        
        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
        );
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.stroke();
        }
      }
      
      // Draw and update nodes
      for (const node of nodes) {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.offsetWidth) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.offsetHeight) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-16 lg:pt-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Your Digital Life,</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Neurally Connected.
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              NeuroSync connects the dots across your digital life, creating a unified cognitive layer that understands what you're working on and helps you remember, synthesize, and act on your knowledge.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5">
                Get Early Access
              </button>
              
              <button className="px-8 py-3 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 text-white font-medium transition-all flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-400" />
                See How It Works
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
              <div className="px-6 py-4 border-b border-slate-700/50 flex items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 flex-1 text-center text-sm font-medium text-gray-300">
                  NeuroSync AI Assistant
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500 rounded-full p-2 mt-1">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-2xl p-4 text-gray-300">
                    <p>How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-600 rounded-full p-2 mt-1">
                    <div className="h-5 w-5"></div>
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-2xl p-4 text-gray-300">
                    <p>Where was that PDF about reinforcement learning that John sent in March?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-500 rounded-full p-2 mt-1">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 bg-slate-700/50 rounded-2xl p-4 text-gray-300 space-y-3">
                    <p>I found the PDF on reinforcement learning from John:</p>
                    <div className="p-3 bg-slate-800 rounded-lg flex items-center gap-3">
                      <div className="bg-red-500/20 p-2 rounded-lg">
                        <Search className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">ReinforcementLearning_Latest.pdf</div>
                        <div className="text-xs text-gray-400 flex items-center gap-1">
                          <Link className="h-3 w-3" /> Received via Gmail • March 15, 2025
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      Related: 3 Slack discussions and 2 Calendar events about this topic.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-gradient-to-br from-purple-500/30 to-indigo-500/20 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-gradient-to-br from-teal-500/20 to-indigo-500/10 blur-2xl rounded-full"></div>
          </div>
        </div>
        
        {/* Trusted apps section */}
        <div className="mt-16 sm:mt-24 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm uppercase tracking-wider font-medium mb-6">
            Connect Your Digital Life Across
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <AppIcon name="Gmail" icon={<Mail />} />
            <AppIcon name="Notion" icon={<FileText />} />
            <AppIcon name="Slack" icon={<MessageSquare />} />
            <AppIcon name="Drive" icon={<HardDrive />} />
            <AppIcon name="Calendar" icon={<Calendar />} />
            <AppIcon name="WhatsApp" icon={<MessageCircle />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const AppIcon: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="h-12 w-12 rounded-xl bg-slate-800/80 flex items-center justify-center">
      {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-gray-300" })}
    </div>
    <span className="text-xs text-gray-400">{name}</span>
  </div>
);

// Import missing icons
const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const FileText = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </svg>
);

const MessageSquare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const HardDrive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" x2="2" y1="12" y2="12"/>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    <line x1="6" x2="6.01" y1="16" y2="16"/>
    <line x1="10" x2="10.01" y1="16" y2="16"/>
  </svg>
);

const MessageCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default Hero;