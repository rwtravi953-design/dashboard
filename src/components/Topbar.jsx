const Topbar = ({
  dark, setDark, setSidebarOpen,
  search, setSearch,
  notifOpen, setNotifOpen,
  notifs, setNotifs,
  card, inputCls,
}) => {
  const unread = notifs.filter((n) => !n.read).length;

  const notifIcon = { user: "👤", order: "🛒", alert: "⚠️", report: "📄" };

  return (
    <header
      className={`${card} border-b flex items-center justify-between px-5 py-3 sticky top-0 z-10`}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen((s) => !s)}
          className={`p-2 rounded-lg ${dark ? "hover:bg-gray-800" : "hover:bg-gray-100"} text-xl`}
        >
          ☰
        </button>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search…"
          className={`rounded-lg border text-sm px-3 py-1.5 w-44 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${inputCls}`}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Dark toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          className={`p-2 rounded-lg ${dark ? "hover:bg-gray-800" : "hover:bg-gray-100"} text-lg`}
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen((o) => !o)}
            className={`p-2 rounded-lg ${dark ? "hover:bg-gray-800" : "hover:bg-gray-100"} text-lg relative`}
          >
            🔔
            {unread > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {unread}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className={`absolute right-0 mt-2 w-72 ${card} border rounded-xl shadow-2xl z-50`}>
              <div className="px-4 py-3 border-b border-gray-800 font-semibold text-sm flex items-center justify-between">
                Notifications
                <button
                  onClick={() => setNotifs((n) => n.map((x) => ({ ...x, read: true })))}
                  className="text-indigo-400 text-xs"
                >
                  Mark all read
                </button>
              </div>
              {notifs.map((n) => (
                <div
                  key={n.id}
                  onClick={() =>
                    setNotifs((ns) =>
                      ns.map((x) => (x.id === n.id ? { ...x, read: true } : x))
                    )
                  }
                  className={`px-4 py-3 flex items-start gap-3 cursor-pointer
                    ${dark ? "hover:bg-gray-800" : "hover:bg-gray-50"}
                    ${!n.read ? (dark ? "bg-indigo-950" : "bg-indigo-50") : ""}`}
                >
                  <span className="text-xl mt-0.5">{notifIcon[n.type]}</span>
                  <div>
                    <div className="text-sm font-medium">{n.text}</div>
                    <div className="text-xs opacity-50">{n.time}</div>
                  </div>
                  {!n.read && (
                    <span className="ml-auto w-2 h-2 bg-indigo-500 rounded-full mt-1.5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;