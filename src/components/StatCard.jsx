const StatCard = ({ label, value, change, icon, color, card }) => {
  const pos = change >= 0;
  return (
    <div className={`${card} border rounded-xl p-5 flex items-center gap-4`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${color}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-xs opacity-50 font-medium uppercase tracking-wide">{label}</div>
        <div className="text-2xl font-bold mt-0.5">{value}</div>
        <div className={`text-xs mt-0.5 font-semibold ${pos ? "text-green-400" : "text-red-400"}`}>
          {pos ? "▲" : "▼"} {Math.abs(change)}% vs last month
        </div>
      </div>
    </div>
  );
};

export default StatCard;