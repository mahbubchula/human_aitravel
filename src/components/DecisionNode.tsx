interface DecisionNodeProps {
  label: string;
  progress: number;
  color: string;
  delay: string;
}

export function DecisionNode({ label, progress, color, delay }: DecisionNodeProps) {
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
