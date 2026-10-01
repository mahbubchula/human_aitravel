import { useState, useEffect, useRef } from 'react';
import { StatCard, DecisionNode, AICard, CollabStep, ResultItem } from './components';
import { IMAGES, AI_CAPABILITIES, COLLAB_STEPS } from './constants';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      const sections = document.querySelectorAll('.scene');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      {/* Cinematic letterbox */}
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />
      
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[200] bg-black/50">
        <div 
          className="h-full progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <a
            key={i}
            href={`#scene-${i}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === i 
                ? 'bg-indigo-500 scale-150 shadow-lg shadow-indigo-500/50' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </nav>

      {/* Loading screen */}
      <div className={`fixed inset-0 z-[300] bg-black flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-sm tracking-widest uppercase">Loading Experience</p>
        </div>
      </div>

      {/* SCENE 1: Hero - Opening */}
      <section id="scene-0" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="scene-overlay" />
        
        {/* Floating data streams */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.3,
            }}
          />
        ))}

        <div className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-white/70">Visual Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-['Space_Grotesk'] leading-tight">
            <span className="block text-white glow-text">Human</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-amber-400 my-2">×</span>
            <span className="block text-white glow-cyan">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-2xl mx-auto font-light">
            The Future of Travel Decision Making
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-white/40">
            <span>Scroll to explore</span>
            <div className="scroll-indicator">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Play button overlay */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="play-btn w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400/50 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-indigo-500/40 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </section>

      {/* SCENE 2: The Challenge */}
      <section id="scene-1" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${IMAGES.brain})` }}
        />
        <div className="scene-overlay" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-amber-400 text-xs font-medium tracking-wider uppercase">Chapter 01</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">
              <span className="text-white">The Travel</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Decision Paradox</span>
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed">
              Every year, travelers spend <span className="text-amber-400 font-semibold">60+ hours</span> researching trips. 
              With millions of options, the human brain struggles to process all variables — 
              budgets, preferences, weather, reviews, availability, and timing.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <StatCard number="60+" label="Hours spent" color="amber" />
              <StatCard number="38" label="Sites visited" color="orange" />
              <StatCard number="73%" label="Feel overwhelmed" color="red" />
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="relative">
            <div className="gradient-border p-8 rounded-2xl bg-black/40 backdrop-blur-xl">
              <div className="space-y-4">
                <DecisionNode label="Budget Analysis" progress={85} color="indigo" delay="0s" />
                <DecisionNode label="Destination Match" progress={62} color="cyan" delay="0.2s" />
                <DecisionNode label="Time Optimization" progress={45} color="amber" delay="0.4s" />
                <DecisionNode label="Experience Score" progress={78} color="green" delay="0.6s" />
                <DecisionNode label="Risk Assessment" progress={34} color="red" delay="0.8s" />
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-white/40 text-sm">Human Cognitive Load</p>
                <p className="text-3xl font-bold text-red-400 mt-1">OVERWHELMING</p>
              </div>
            </div>
            
            {/* Floating particles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  '--tx': `${(Math.random() - 0.5) * 100}px`,
                  '--ty': `${-50 - Math.random() * 100}px`,
                  animationDelay: `${i * 0.6}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 3: AI Steps In */}
      <section id="scene-2" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${IMAGES.data})` }}
        />
        <div className="scene-overlay" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
              <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Chapter 02</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
              <span className="text-white">AI Enters the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Decision Matrix</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Artificial Intelligence processes millions of data points in milliseconds, 
              transforming chaos into clarity.
            </p>
          </div>

          {/* AI Processing Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((capability, index) => (
              <AICard
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                metric={capability.metric}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SCENE 4: The Collaboration */}
      <section id="scene-3" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${IMAGES.interface})` }}
        />
        <div className="scene-overlay" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-4">
              <span className="text-indigo-400 text-xs font-medium tracking-wider uppercase">Chapter 03</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Human + AI</span><br />
              <span className="text-white">The Perfect Synergy</span>
            </h2>
          </div>

          {/* Collaboration Flow */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-amber-500/50 hidden md:block" />
            
            <div className="space-y-16">
              {COLLAB_STEPS.map((step, index) => (
                <CollabStep
                  key={index}
                  side={step.side}
                  human={step.human}
                  humanDetail={step.humanDetail}
                  ai={step.ai}
                  aiResult={step.aiResult}
                  step={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 5: The Destination */}
      <section id="scene-4" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${IMAGES.travel})` }}
        />
        <div className="scene-overlay opacity-60" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
            <span className="text-green-400 text-xs font-medium tracking-wider uppercase">Final Scene</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="text-white">The Perfect</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500">Journey Begins</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            When human intuition meets artificial intelligence, every trip becomes 
            a masterpiece of personalized experience.
          </p>

          {/* Results comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="text-lg font-semibold text-white/40 mb-4">Traditional Planning</h3>
              <div className="space-y-3 text-left">
                <ResultItem label="Time spent" value="60+ hours" color="red" />
                <ResultItem label="Satisfaction" value="6.2/10" color="amber" />
                <ResultItem label="Budget overrun" value="+23%" color="red" />
                <ResultItem label="Missed experiences" value="Many" color="red" />
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/30 pulse-glow">
              <h3 className="text-lg font-semibold text-indigo-300 mb-4">Human × AI Planning</h3>
              <div className="space-y-3 text-left">
                <ResultItem label="Time spent" value="15 minutes" color="green" />
                <ResultItem label="Satisfaction" value="9.7/10" color="green" />
                <ResultItem label="Budget saved" value="-18%" color="green" />
                <ResultItem label="Hidden gems found" value="12" color="green" />
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <p className="text-white/40 text-sm tracking-widest uppercase">The future of travel is collaborative</p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500" />
              <span className="text-2xl">✦</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm">
            Human × AI Travel Decision — A Visual Experience
          </p>
          <p className="text-white/20 text-xs mt-2">
            Illustrating the future of collaborative intelligence in travel
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
