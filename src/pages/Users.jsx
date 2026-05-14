import { statusColor, avatarColors } from "../data/mockData";

const roles = ["All", "Admin", "Editor", "Viewer"];

const Users = ({ card, dark, tr, th, filtered, filter, setFilter, showToast }) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => showToast("User invitation sent!")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Invite User
        </button>
      </div>

      {/* Role Filter */}
      <div className="flex gap-2 flex-wrap">
        {roles.map((r) => (
          <button
            key={r}
            onClick={() => setFilter(r)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
              ${filter === r
                ? "bg-indigo-600 text-white border-indigo-600"
                : dark
                ? "border-gray-700 text-gray-400 hover:border-indigo-500"
                : "border-gray-300 text-gray-500 hover:border-indigo-400"
              }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className={`${card} border rounded-xl`}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={th}>
                {["User", "Role", "Status", "Joined", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={u.id} className={`border-t ${tr}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {u.avatar}
                      </div>
                      <div>
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs opacity-50">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-indigo-400 font-medium">{u.role}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[u.status]}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 opacity-60">{u.joined}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => showToast(`Editing ${u.name}`)}
                        className="text-xs px-3 py-1 rounded-lg bg-indigo-600 bg-opacity-20 text-indigo-400 hover:bg-opacity-40"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => showToast(`${u.name} removed`, "error")}
                        className="text-xs px-3 py-1 rounded-lg bg-red-600 bg-opacity-20 text-red-400 hover:bg-opacity-40"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;