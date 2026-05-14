const prefs = [
  { key: "notifications", label: "Email Notifications", desc: "Receive alerts via email" },
  { key: "twoFA",         label: "Two-Factor Auth",     desc: "Enhance account security" },
];

const Settings = ({ card, dark, inputCls, data, setData, showToast }) => {
  return (
    <div className="space-y-5 max-w-xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile */}
      <div className={`${card} border rounded-xl p-6 space-y-4`}>
        <div className="font-semibold">Profile</div>
        <div>
          <label className="text-xs opacity-50 uppercase font-medium">Full Name</label>
          <input
            value={data.name}
            onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
            className={`mt-1 w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${inputCls}`}
          />
        </div>
        <div>
          <label className="text-xs opacity-50 uppercase font-medium">Email</label>
          <input
            value={data.email}
            onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
            className={`mt-1 w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${inputCls}`}
          />
        </div>
      </div>

      {/* Preferences */}
      <div className={`${card} border rounded-xl p-6 space-y-4`}>
        <div className="font-semibold">Preferences</div>
        {prefs.map((p) => (
          <div key={p.key} className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{p.label}</div>
              <div className="text-xs opacity-50">{p.desc}</div>
            </div>
            <button
              onClick={() => setData((d) => ({ ...d, [p.key]: !d[p.key] }))}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                data[p.key] ? "bg-indigo-600" : dark ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${
                  data[p.key] ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => showToast("Settings saved successfully!")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium w-full"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Settings;