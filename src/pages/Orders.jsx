import { statusColor } from "../data/mockData";

const statuses = ["All", "Completed", "Pending", "Processing", "Cancelled"];

const Orders = ({ card, dark, tr, th, filtered, filter, setFilter }) => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Orders</h1>

      {/* Status Filter */}
      <div className="flex gap-2 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
              ${filter === s
                ? "bg-indigo-600 text-white border-indigo-600"
                : dark
                ? "border-gray-700 text-gray-400 hover:border-indigo-500"
                : "border-gray-300 text-gray-500 hover:border-indigo-400"
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className={`${card} border rounded-xl`}>
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
              {filtered.map((o) => (
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

export default Orders;