import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function AnalyticsChart() {

  const data = [
    {
      name: "Pending",
      orders: 15,
    },
    {
      name: "Picked",
      orders: 5,
    },
    {
      name: "Processing",
      orders: 1,
    },
    {
      name: "Delivered",
      orders: 0,
    },
  ];

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">

      <h2 className="text-2xl font-bold text-white mb-6">
        Orders Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="orders"
            fill="#eab308"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;