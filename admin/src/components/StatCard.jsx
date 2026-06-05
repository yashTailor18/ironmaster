function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm mb-2">
            {title}
          </p>

          <h2 className="text-5xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;