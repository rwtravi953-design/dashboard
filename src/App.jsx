import { useState } from "react";
import Sidebar  from "./components/Sidebar";
import Topbar   from "./components/Topbar";
import Toast    from "./components/Toast";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Users     from "./pages/Users";
import Orders    from "./pages/Orders";
import Settings  from "./pages/Settings";
import { notifications as initNotifs, users, orders } from "./data/mockData";

export default function App() {
  const [active,      setActive]      = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dark,        setDark]        = useState(true);
  const [notifOpen,   setNotifOpen]   = useState(false);
  const [notifs,      setNotifs]      = useState(initNotifs);
  const [search,      setSearch]      = useState("");
  const [userFilter,  setUserFilter]  = useState("All");
  const [orderFilter, setOrderFilter] = useState("All");
  const [toast,       setToast]       = useState(null);
  const [settingsData, setSettingsData] = useState({
    name: "Ravi Admin",
    email: "admin@dashboard.in",
    notifications: true,
    twoFA: false,
  });

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // Theme helpers
  const bg    = dark ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900";
  const card  = dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const th    = dark ? "bg-gray-800 text-gray-400"  : "bg-gray-100 text-gray-500";
  const tr    = dark ? "border-gray-800 hover:bg-gray-800" : "border-gray-100 hover:bg-gray-50";
  const inputCls = dark
    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
    : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400";

  // Filtered data
  const filteredUsers = users.filter(
    (u) =>
      (userFilter === "All" || u.role === userFilter) &&
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredOrders = orders.filter(
    (o) =>
      (orderFilter === "All" || o.status === orderFilter) &&
      (o.id.toLowerCase().includes(search.toLowerCase()) ||
        o.customer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div
      className={`min-h-screen flex ${bg} transition-colors duration-300`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Toast toast={toast} />

      <Sidebar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen}
        dark={dark}
      />

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Topbar
          dark={dark}
          setDark={setDark}
          setSidebarOpen={setSidebarOpen}
          search={search}
          setSearch={setSearch}
          notifOpen={notifOpen}
          setNotifOpen={setNotifOpen}
          notifs={notifs}
          setNotifs={setNotifs}
          card={card}
          inputCls={inputCls}
        />

        <main className="flex-1 overflow-auto p-5">
          {active === "dashboard" && (
            <Dashboard card={card} dark={dark} tr={tr} th={th} />
          )}
          {active === "analytics" && (
            <Analytics card={card} dark={dark} />
          )}
          {active === "users" && (
            <Users
              card={card} dark={dark} tr={tr} th={th}
              filtered={filteredUsers}
              filter={userFilter}
              setFilter={setUserFilter}
              showToast={showToast}
              inputCls={inputCls}
            />
          )}
          {active === "orders" && (
            <Orders
              card={card} dark={dark} tr={tr} th={th}
              filtered={filteredOrders}
              filter={orderFilter}
              setFilter={setOrderFilter}
            />
          )}
          {active === "settings" && (
            <Settings
              card={card} dark={dark}
              inputCls={inputCls}
              data={settingsData}
              setData={setSettingsData}
              showToast={showToast}
            />
          )}
        </main>
      </div>
    </div>
  );
}