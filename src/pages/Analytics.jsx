import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { revenueData, trafficData } from "../data/mockData";

const kpis = [
  { label: "Avg Session",  value: "3m 42s", icon: "⏱️" },
  { label: "Bounce Rate",  value: "32.4%",  icon: "↩️" },
  { label: "Page Views",   value: "128K",   icon: "👁️" },
  { label: "New Visitors", value: "61%",    icon: "🌱" },
];

const Analytics = ({ card }) => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Analytics</h1>

      {/* Charts */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        <div className={`${card} border rounded-xl p-5`}>
          <div className="font-semibold mb-4">Weekly Traffic</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day"  tick={{ fontSize: 11 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 11 }} stroke="#6b7280" />
              <Tooltip contentStyle={{ background: "#1f2937", border: "none", borderRadius: 8 }} />
              <Bar dataKey="users"    fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sessions" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={`${card} border rounded-xl p-5`}>
          <div className="font-semibold mb-4">Monthly Profit</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 11 }} stroke="#6b7280" />
              <Tooltip contentStyle={{ background: "#1f2937", border: "none", borderRadius: 8 }} />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#10b981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KPI Cards */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
      >
        {kpis.map((k) => (
          <div key={k.label} className={`${card} border rounded-xl p-4 text-center`}>
            <div className="text-2xl mb-1">{k.icon}</div>
            <div className="text-xl font-bold">{k.value}</div>
            <div className="text-xs opacity-50 mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;