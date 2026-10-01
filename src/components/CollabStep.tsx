import { useState, useEffect, useRef } from 'react';

interface CollabStepProps {
  side: string;
  human: string;
  humanDetail: string;
  ai: string;
  aiResult: string;
  step: number;
}

export function CollabStep({ side, human, humanDetail, ai, aiResult, step }: CollabStepProps) {
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
