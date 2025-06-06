import React from 'react';
import { Network, RefreshCcw, Brain, Lightbulb, Map } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-900/40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Connect Your Digital World
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            NeuroSync builds a comprehensive knowledge graph of everything you interact with digitally, enabling powerful recall and insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FeatureCard
            icon={<Network className="h-8 w-8" />}
            title="Cross-App Context Graph"
            description="Connect Gmail, Notion, Slack, Calendar, WhatsApp, and local files to create a knowledge graph of everything you interact with."
            gradient="from-purple-500 to-indigo-600"
          >
            <div className="mt-6 bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
              <img 
                src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Context Graph visualization" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </FeatureCard>
          
          <FeatureCard
            icon={<Brain className="h-8 w-8" />}
            title="Smart Context Recall"
            description="Ask natural language questions about your digital life and get precise answers with source links."
            gradient="from-teal-500 to-blue-600"
          >
            <div className="mt-6 p-4 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50">
              <div className="space-y-3">
                <QueryExample query="Where was that PDF about reinforcement learning that John sent in March?" />
                <QueryExample query="What did I promise to deliver to the team this week?" />
                <QueryExample query="Find all conversations with Sarah about the Q2 marketing plan" />
              </div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            icon={<RefreshCcw className="h-8 w-8" />}
            title="Temporal Thought Reconstruction"
            description="A 'rewind' feature showing a timeline of thoughts, links, tasks, and messages as you worked throughout the day."
            gradient="from-pink-500 to-orange-600"
          >
            <div className="mt-6 bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-gray-700"></div>
                <TimelineEvent 
                  time="9:15 AM" 
                  app="Slack" 
                  event="Discussed new feature with design team" 
                />
                <TimelineEvent 
                  time="10:30 AM" 
                  app="Gmail" 
                  event="Received report from analytics team" 
                />
                <TimelineEvent 
                  time="11:45 AM" 
                  app="Notion" 
                  event="Updated project roadmap document" 
                />
                <TimelineEvent 
                  time="2:20 PM" 
                  app="Calendar" 
                  event="Meeting with stakeholders" 
                  last 
                />
              </div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8" />}
            title="Contextual Nudges"
            description="Get intelligent suggestions of related information as you work, right when you need it."
            gradient="from-amber-500 to-red-600"
          >
            <div className="mt-6 bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
              <div className="space-y-3">
                <NudgeExample 
                  context="While writing an email about Q3 goals" 
                  suggestion="You mentioned similar priorities in your team meeting last week. Include those points?" 
                />
                <NudgeExample 
                  context="When scheduling a client meeting" 
                  suggestion="This client previously requested afternoon meetings. Schedule after 2pm?" 
                />
                <NudgeExample 
                  context="While drafting a proposal document" 
                  suggestion="There's a similar proposal from last year you could reference. View it?" 
                />
              </div>
            </div>
          </FeatureCard>
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Mental State Dashboard
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              See what's been taking your attention across tools, identify distraction patterns, and optimize your focus.
            </p>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard 
                title="Focus Analysis" 
                value="73%" 
                change="+12%" 
                positive 
              >
                <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </DashboardCard>
              
              <DashboardCard 
                title="Context Switches" 
                value="24" 
                change="-8" 
                positive 
              >
                <div className="flex items-end h-16 space-x-1">
                  {[15, 22, 18, 30, 25, 20, 24].map((value, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-500 rounded-t"
                      style={{ height: `${value / 30 * 100}%` }}
                    ></div>
                  ))}
                </div>
              </DashboardCard>
              
              <DashboardCard 
                title="App Distribution" 
                value="5 apps" 
                change="" 
                positive={false} 
              >
                <div className="flex h-8 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
                  <div className="h-full bg-purple-500" style={{ width: '25%' }}></div>
                  <div className="h-full bg-teal-500" style={{ width: '20%' }}></div>
                  <div className="h-full bg-amber-500" style={{ width: '15%' }}></div>
                  <div className="h-full bg-red-500" style={{ width: '5%' }}></div>
                </div>
              </DashboardCard>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Activity Timeline</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-md bg-slate-700 text-sm text-white">Today</button>
                  <button className="px-3 py-1 rounded-md bg-slate-900 text-sm text-gray-400">Week</button>
                  <button className="px-3 py-1 rounded-md bg-slate-900 text-sm text-gray-400">Month</button>
                </div>
              </div>
              
              <div className="grid grid-cols-24 gap-1 h-20">
                {Array.from({ length: 24 }).map((_, i) => {
                  const height = Math.random() * 100;
                  const color = getActivityColor(height);
                  
                  return (
                    <div key={i} className="flex flex-col items-center">
                      <div 
                        className={`w-full rounded-t ${color}`} 
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">{i}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getActivityColor = (value: number) => {
  if (value > 80) return 'bg-green-500';
  if (value > 60) return 'bg-teal-500';
  if (value > 40) return 'bg-blue-500';
  if (value > 20) return 'bg-purple-500';
  return 'bg-slate-700';
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  gradient: string;
}> = ({ icon, title, description, children, gradient }) => (
  <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-3 w-fit`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mt-4 text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{description}</p>
    {children}
  </div>
);

const QueryExample: React.FC<{ query: string }> = ({ query }) => (
  <div className="p-3 bg-slate-900/80 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer">
    <div className="flex items-center gap-2">
      <Search className="h-4 w-4 text-purple-400" />
      <p className="text-sm text-gray-300">{query}</p>
    </div>
  </div>
);

const NudgeExample: React.FC<{ context: string; suggestion: string }> = ({ context, suggestion }) => (
  <div className="p-3 bg-slate-900/80 rounded-lg hover:bg-slate-900 transition-colors">
    <p className="text-xs text-gray-400 mb-1">{context}</p>
    <div className="flex items-center gap-2">
      <Lightbulb className="h-4 w-4 text-amber-400 flex-shrink-0" />
      <p className="text-sm text-gray-300">{suggestion}</p>
    </div>
  </div>
);

const TimelineEvent: React.FC<{ time: string; app: string; event: string; last?: boolean }> = ({ 
  time, 
  app, 
  event,
  last = false 
}) => (
  <div className={`relative pl-10 ${last ? '' : 'pb-6'}`}>
    <div className="absolute left-4 mt-1.5 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-purple-500 bg-slate-900"></div>
    <p className="text-xs text-purple-400 font-medium">{time}</p>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-xs px-2 py-0.5 bg-slate-700 rounded-full">{app}</span>
      <p className="text-sm text-gray-300">{event}</p>
    </div>
  </div>
);

const DashboardCard: React.FC<{
  title: string;
  value: string;
  change: string;
  positive: boolean;
  children: React.ReactNode;
}> = ({ title, value, change, positive, children }) => (
  <div className="bg-slate-900/80 rounded-xl p-4">
    <div className="flex justify-between items-start mb-4">
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <div className="text-right">
        <p className="text-xl font-bold text-white">{value}</p>
        {change && (
          <p className={`text-xs ${positive ? 'text-green-400' : 'text-red-400'} flex items-center`}>
            {positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {change}
          </p>
        )}
      </div>
    </div>
    {children}
  </div>
);

// Import missing icons
const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  </svg>
);

const TrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const TrendingDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/>
    <polyline points="16 17 22 17 22 11"/>
  </svg>
);

export default Features;