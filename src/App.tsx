import { useState, useEffect, useRef } from 'react';

// Image URLs from generated assets
const heroImg = 'https://image.qwenlm.ai/generated-images/8a2ac7bb-80da-4288-ae8d-42257d1b00ef/_result.png';
const brainImg = 'https://image.qwenlm.ai/generated-images/9b3da661-0726-4d5d-b6a4-480feab43078/_result.png';
const travelImg = 'https://image.qwenlm.ai/generated-images/ef2f0ab2-eb5c-4bf8-8a80-424a69fcbd04/_result.png';
const dataImg = 'https://image.qwenlm.ai/generated-images/ae97b057-6419-49bf-be09-d7414a34fee4/_result.png';
const interfaceImg = 'https://image.qwenlm.ai/generated-images/782c41dc-65eb-4724-9e56-b3b7a0627e3e/_result.png';

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
          style={{ backgroundImage: `url(${heroImg})` }}
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
          style={{ backgroundImage: `url(${brainImg})` }}
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
          style={{ backgroundImage: `url(${dataImg})` }}
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
            <AICard 
              icon="🧠"
              title="Neural Processing"
              description="Deep learning models analyze patterns from billions of travel decisions"
              metric="10M+ data points/sec"
              delay={0}
            />
            <AICard 
              icon="🌍"
              title="Global Intelligence"
              description="Real-time access to weather, pricing, availability across 195 countries"
              metric="195 countries"
              delay={200}
            />
            <AICard 
              icon="⚡"
              title="Instant Optimization"
              description="Multi-variable optimization finds the perfect balance of cost, time & experience"
              metric="< 2 seconds"
              delay={400}
            />
            <AICard 
              icon="🎯"
              title="Personalization Engine"
              description="Learns your preferences from past behavior, social signals & stated desires"
              metric="98.7% accuracy"
              delay={600}
            />
            <AICard 
              icon="🔮"
              title="Predictive Analytics"
              description="Forecasts price changes, crowd levels, and experience quality before you book"
              metric="14-day forecast"
              delay={800}
            />
            <AICard 
              icon="🛡️"
              title="Risk Mitigation"
              description="Continuous monitoring of safety data, travel advisories & insurance optimization"
              metric="24/7 monitoring"
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* SCENE 4: The Collaboration */}
      <section id="scene-3" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${interfaceImg})` }}
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
              <CollabStep
                side="left"
                human="I want a beach vacation"
                humanDetail="Warm water, good food, not too crowded"
                ai="Analyzing 2,847 destinations matching your criteria..."
                aiResult="Bali, Maldives, Seychelles — ranked by your preference score"
                step={1}
              />
              <CollabStep
                side="right"
                human="Show me options under $3,000"
                humanDetail="Including flights, hotel, and activities"
                ai="Found 23 packages within budget. Optimizing for best value..."
                aiResult="Top pick: Bali 7-night package — $2,847 all-inclusive"
                step={2}
              />
              <CollabStep
                side="left"
                human="What about the weather in March?"
                humanDetail="I want sunny days for photography"
                ai="Weather prediction: 92% sunny days. UV index optimal for outdoor shoots."
                aiResult="Recommendation confirmed — March 15-22 has ideal conditions"
                step={3}
              />
              <CollabStep
                side="right"
                human="Book it! But add a cooking class"
                humanDetail="I love learning local cuisine"
                ai="Added top-rated Balinese cooking experience. Total: $2,923."
                aiResult="✓ Booking confirmed. Itinerary sent to your device."
                step={4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 5: The Destination */}
      <section id="scene-4" className="scene vignette">
        <div 
          className="scene-bg ken-burns"
          style={{ backgroundImage: `url(${travelImg})` }}
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

// Sub-components

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  const colorMap: Record<string, string> = {
    amber: 'text-amber-400 border-amber-500/30',
    orange: 'text-orange-400 border-orange-500/30',
    red: 'text-red-400 border-red-500/30',
  };
  
  return (
    <div className={`text-center p-4 rounded-xl border ${colorMap[color]} bg-white/5`}>
      <p className={`text-2xl font-bold ${colorMap[color].split(' ')[0]}`}>{number}</p>
      <p className="text-xs text-white/50 mt-1">{label}</p>
    </div>
  );
}

function DecisionNode({ label, progress, color, delay }: { label: string; progress: number; color: string; delay: string }) {
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
    amber: 'bg-amber-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
  };
  
  return (
    <div className="space-y-1" style={{ animationDelay: delay }}>
      <div className="flex justify-between text-sm">
        <span className="text-white/70">{label}</span>
        <span className="text-white/40">{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div 
          className={`h-full rounded-full ${colorMap[color]} transition-all duration-1000`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function AICard({ icon, title, description, metric, delay }: { icon: string; title: string; description: string; metric: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-700 hover:bg-white/10 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 mb-4">{description}</p>
      <div className="pt-3 border-t border-white/10">
        <span className="text-cyan-400 text-sm font-mono">{metric}</span>
      </div>
    </div>
  );
}

function CollabStep({ side, human, humanDetail, ai, aiResult, step }: { 
  side: string; human: string; humanDetail: string; ai: string; aiResult: string; step: number 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Step indicator */}
      <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 items-center justify-center text-indigo-400 font-bold text-sm z-10`}>
        {step}
      </div>

      {/* Human side */}
      <div className={`p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-xl ${side === 'right' ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg">
            👤
          </div>
          <div>
            <p className="text-amber-400 font-semibold text-sm">Human</p>
            <p className="text-white/80 font-medium">{human}</p>
          </div>
        </div>
        <p className="text-sm text-white/40 ml-[3.25rem]">{humanDetail}</p>
      </div>

      {/* AI side */}
      <div className={`p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl ${side === 'right' ? 'md:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-lg">
            🤖
          </div>
          <div>
            <p className="text-cyan-400 font-semibold text-sm">AI Processing</p>
            <p className="text-white/80 text-sm">{ai}</p>
          </div>
        </div>
        <div className="ml-[3.25rem] p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <p className="text-cyan-300 text-sm font-medium">→ {aiResult}</p>
        </div>
      </div>
    </div>
  );
}

function ResultItem({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    red: 'text-red-400',
    amber: 'text-amber-400',
    green: 'text-green-400',
  };
  
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/50 text-sm">{label}</span>
      <span className={`font-semibold ${colorMap[color]}`}>{value}</span>
    </div>
  );
}

export default App;
