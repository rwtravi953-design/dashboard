import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import StatCard from "../components/StatCard";
import { revenueData, pieData, PIE_COLORS, orders, statusColor } from "../data/mockData";

const Dashboard = ({ card, dark, tr, th }) => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm opacity-50">Welcome back, Arjun 👋</p>
        </div>
        <div className="text-xs opacity-40">Last updated: just now</div>
      </div>

      {/* Stat Cards */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        <StatCard label="Total Revenue" value="₹5.4L"  change={12.4} icon="💰" color="bg-indigo-600 bg-opacity-20 text-indigo-400" card={card} />
        <StatCard label="Active Users"  value="3,284"  change={8.1}  icon="👥" color="bg-purple-600 bg-opacity-20 text-purple-400" card={card} />
        <StatCard label="Orders"        value="1,482"  change={-3.2} icon="🛒" color="bg-pink-600   bg-opacity-20 text-pink-400"   card={card} />
        <StatCard label="Conversion"    value="4.7%"   change={1.9}  icon="📈" color="bg-amber-600  bg-opacity-20 text-amber-400"  card={card} />
      </div>

      {/* Charts */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {/* Area Chart */}
        <div className={`${card} border rounded-xl p-5`}>
          <div className="font-semibold mb-4">Revenue vs Expenses</div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0}   />
                </linearGradient>
                <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#ec4899" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#6b7280" />
              <YAxis tick={{ fontSize: 11 }} stroke="#6b7280" />
              <Tooltip contentStyle={{ background: "#1f2937", border: "none", borderRadius: 8 }} />
              <Area type="monotone" dataKey="revenue"  stroke="#6366f1" fill="url(#rev)" strokeWidth={2} />
              <Area type="monotone" dataKey="expenses" stroke="#ec4899" fill="url(#exp)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className={`${card} border rounded-xl p-5`}>
          <div className="font-semibold mb-4">Traffic Sources</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={4}>
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "#1f2937", border: "none", borderRadius: 8 }} />
              <Legend iconType="circle" iconSize={8} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className={`${card} border rounded-xl`}>
        <div className="px-5 py-4 font-semibold border-b border-gray-800">Recent Orders</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={th}>
                {["Order ID", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 4).map((o) => (
                <tr key={o.id} className={`border-t ${tr}`}>
                  <td className="px-4 py-3 font-mono text-indigo-400">{o.id}</td>
                  <td className="px-4 py-3">{o.customer}</td>
                  <td className="px-4 py-3">{o.product}</td>
                  <td className="px-4 py-3 font-semibold">{o.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 opacity-60">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;