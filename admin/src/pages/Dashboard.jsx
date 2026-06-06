import { useEffect, useState } from "react";
import axios from "axios";
import AnalyticsChart from "../components/AnalyticsChart";
import AdminLayout from "../layouts/AdminLayout";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://ironmaster-7qg4.vercel.app";

function Dashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    pickedUpOrders: 0,
    processingOrders: 0,
    outForDeliveryOrders: 0,
    deliveredOrders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/dashboard/stats`
        );

        setStats(response.data.stats);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="text-white p-8">
        <Navbar />

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <StatCard
            title="Total Orders"
            value={stats.totalOrders}
            icon="📦"
          />

          <StatCard
            title="Pending Orders"
            value={stats.pendingOrders}
            icon="⏳"
          />

          <StatCard
            title="Picked Up"
            value={stats.pickedUpOrders}
            icon="🚚"
          />

          <StatCard
            title="Processing"
            value={stats.processingOrders}
            icon="⚙️"
          />

          <StatCard
            title="Out For Delivery"
            value={stats.outForDeliveryOrders}
            icon="🚛"
          />

          <StatCard
            title="Delivered"
            value={stats.deliveredOrders}
            icon="✅"
          />
        </div>

        {/* Business Overview */}
        <div className="mt-10 bg-[#111111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Business Overview
          </h2>

          <AnalyticsChart />

          {/* Revenue Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6">
              <p className="text-gray-400">
                Estimated Revenue
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-3">
                ₹6,279
              </h2>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6">
              <p className="text-gray-400">
                Active Customers
              </p>

              <h2 className="text-4xl font-bold text-blue-400 mt-3">
                21
              </h2>
            </div>

            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6">
              <p className="text-gray-400">
                Delivery Rate
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-3">
                98%
              </h2>
            </div>
          </div>

          {/* Order Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-400 mb-2">
                Total Orders
              </p>

              <h3 className="text-4xl font-bold">
                {stats.totalOrders}
              </h3>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-400 mb-2">
                Active Orders
              </p>

              <h3 className="text-4xl font-bold">
                {stats.pendingOrders +
                  stats.pickedUpOrders +
                  stats.processingOrders +
                  stats.outForDeliveryOrders}
              </h3>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-gray-400 mb-2">
                Completed Orders
              </p>

              <h3 className="text-4xl font-bold">
                {stats.deliveredOrders}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;