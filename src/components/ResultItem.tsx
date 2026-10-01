interface ResultItemProps {
  label: string;
  value: string;
  color: string;
}

export function ResultItem({ label, value, color }: ResultItemProps) {
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
