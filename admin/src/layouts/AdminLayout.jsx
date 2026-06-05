import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;