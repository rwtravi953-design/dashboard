const Toast = ({ toast }) => {
  if (!toast) return null;
  return (
    <div
      className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 transition-all
        ${toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
    >
      {toast.type === "success" ? "✅" : "❌"} {toast.msg}
    </div>
  );
};

export default Toast;