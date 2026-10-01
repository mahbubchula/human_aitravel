interface StatCardProps {
  number: string;
  label: string;
  color: string;
}

export function StatCard({ number, label, color }: StatCardProps) {
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
