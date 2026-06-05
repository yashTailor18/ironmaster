import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");

    navigate("/");

  };

  return (
    <div className="w-56 min-h-screen bg-[#111111] border-r border-gray-800 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        IronMaster
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="bg-black p-4 rounded-xl hover:bg-gray-900 transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/bookings"
          className="bg-black p-4 rounded-xl hover:bg-gray-900 transition"
        >
          📦 Bookings
        </Link>

        <Link
          to="/drivers"
          className="bg-black p-4 rounded-xl hover:bg-gray-900 transition"
        >
          🚚 Drivers
        </Link>

        <Link
          to="/settings"
          className="bg-black p-4 rounded-xl hover:bg-gray-900 transition"
        >
          ⚙️ Settings
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 p-4 rounded-xl mt-8 hover:bg-red-700 transition"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;