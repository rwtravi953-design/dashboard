export const revenueData = [
  { month: "Jan", revenue: 42000, expenses: 28000, profit: 14000 },
  { month: "Feb", revenue: 53000, expenses: 31000, profit: 22000 },
  { month: "Mar", revenue: 48000, expenses: 29000, profit: 19000 },
  { month: "Apr", revenue: 61000, expenses: 35000, profit: 26000 },
  { month: "May", revenue: 55000, expenses: 32000, profit: 23000 },
  { month: "Jun", revenue: 72000, expenses: 40000, profit: 32000 },
  { month: "Jul", revenue: 68000, expenses: 37000, profit: 31000 },
  { month: "Aug", revenue: 79000, expenses: 42000, profit: 37000 },
];

export const trafficData = [
  { day: "Mon", users: 1200, sessions: 1800 },
  { day: "Tue", users: 1900, sessions: 2400 },
  { day: "Wed", users: 1500, sessions: 2100 },
  { day: "Thu", users: 2200, sessions: 3100 },
  { day: "Fri", users: 2800, sessions: 3600 },
  { day: "Sat", users: 1700, sessions: 2200 },
  { day: "Sun", users: 1300, sessions: 1700 },
];

export const pieData = [
  { name: "Organic", value: 38 },
  { name: "Direct",  value: 27 },
  { name: "Social",  value: 20 },
  { name: "Referral",value: 15 },
];

export const PIE_COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"];

export const users = [
  { id: 1, name: "Ravi",  email: "rwtravi953@exampe.com",  role: "Admin",  status: "Active",   joined: "2024-01-12", avatar: "AS" },
  { id: 2, name: "Priya Verma",   email: "priya@example.com",  role: "Editor", status: "Active",   joined: "2024-02-20", avatar: "PV" },
  { id: 3, name: "Rahul Singh",   email: "rahul@example.com",  role: "Viewer", status: "Inactive", joined: "2024-03-05", avatar: "RS" },
  { id: 4, name: "Sneha Patel",   email: "sneha@example.com",  role: "Editor", status: "Active",   joined: "2024-04-18", avatar: "SP" },
  { id: 5, name: "Vikram Nair",   email: "vikram@example.com", role: "Viewer", status: "Active",   joined: "2024-05-22", avatar: "VN" },
  { id: 6, name: "Anjali Gupta",  email: "anjali@example.com", role: "Admin",  status: "Active",   joined: "2024-06-01", avatar: "AG" },
];

export const orders = [
  { id: "#ORD-001", customer: "Ravi", product: "Pro Plan",    amount: "₹4,999",  status: "Completed",  date: "2026-05-10" },
  { id: "#ORD-002", customer: "Priya Verma",  product: "Basic Plan",  amount: "₹1,999",  status: "Pending",    date: "2026-05-11" },
  { id: "#ORD-003", customer: "Rahul Singh",  product: "Enterprise",  amount: "₹12,999", status: "Processing", date: "2026-05-12" },
  { id: "#ORD-004", customer: "Sneha Patel",  product: "Pro Plan",    amount: "₹4,999",  status: "Completed",  date: "2026-05-12" },
  { id: "#ORD-005", customer: "Vikram Nair",  product: "Basic Plan",  amount: "₹1,999",  status: "Cancelled",  date: "2026-05-13" },
];

export const notifications = [
  { id: 1, text: "New user registered",    time: "2 min ago",  type: "user",   read: false },
  { id: 2, text: "Order #ORD-003 placed",  time: "15 min ago", type: "order",  read: false },
  { id: 3, text: "Server load at 85%",     time: "1 hr ago",   type: "alert",  read: true  },
  { id: 4, text: "Monthly report ready",   time: "3 hr ago",   type: "report", read: true  },
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "analytics", label: "Analytics", icon: "📊" },
  { id: "users",     label: "Users",     icon: "👥" },
  { id: "orders",    label: "Orders",    icon: "🛒" },
  { id: "settings",  label: "Settings",  icon: "⚙️" },
];

export const statusColor = {
  Active:     "bg-green-100 text-green-700",
  Inactive:   "bg-red-100 text-red-700",
  Completed:  "bg-green-100 text-green-700",
  Pending:    "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Cancelled:  "bg-red-100 text-red-700",
};

export const avatarColors = [
  "bg-indigo-500","bg-purple-500","bg-pink-500",
  "bg-amber-500","bg-emerald-500","bg-sky-500",
];