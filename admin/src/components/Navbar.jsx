function Navbar() {
  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-1">
          {today}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="bg-[#111111] border border-gray-800 px-4 py-3 rounded-2xl hover:border-yellow-500 transition">
          🔔
        </button>

        <div className="flex items-center gap-3 bg-[#111111] border border-gray-800 px-4 py-2 rounded-2xl">

          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
            A
          </div>

          <div>
            <p className="text-white font-semibold">
              Admin
            </p>

            <p className="text-gray-400 text-xs">
              IronMaster
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;