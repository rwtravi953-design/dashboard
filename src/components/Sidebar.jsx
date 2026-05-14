import { navItems } from "../data/mockData";

const Sidebar = ({ active, setActive, sidebarOpen, dark }) => {
  const sidebar = dark
    ? "bg-gray-900 border-gray-800"
    : "bg-white border-gray-200";

  return (
    <aside
      className={`${sidebar} border-r flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-56" : "w-16"
      } min-h-screen z-20`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-800">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          A
        </div>
        {sidebarOpen && (
          <span className="font-bold text-base tracking-tight">AdminPro</span>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 py-4 flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all w-full text-left
              ${
                active === item.id
                  ? "bg-indigo-600 text-white shadow"
                  : dark
                  ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            <span className="text-lg flex-shrink-0">{item.icon}</span>
            {sidebarOpen && item.label}
          </button>
        ))}
      </nav>

      {/* Admin Profile */}
      <div className="px-2 py-4 border-t border-gray-800">
        <div
          className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <span className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AA
          </span>
          {sidebarOpen && (
            <div className="text-xs">
              <div className="font-semibold text-sm">Ravi Admin</div>
              <div className="opacity-60">Super Admin</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;