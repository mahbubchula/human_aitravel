import { useState, useEffect, useRef } from 'react';

interface AICardProps {
  icon: string;
  title: string;
  description: string;
  metric: string;
  delay: number;
}

export function AICard({ icon, title, description, metric, delay }: AICardProps) {
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
