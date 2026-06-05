import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

import {
  getDrivers,
  createDriver,
  deleteDriver,
} from "../services/driverService";

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const [driverData, setDriverData] = useState({
    name: "",
    phone: "",
    bikeNumber: "",
  });

  const fetchDrivers = async () => {
    try {
      const data = await getDrivers();

      setDrivers(data.drivers);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleAddDriver = async () => {

    if (
      !driverData.name ||
      !driverData.phone ||
      !driverData.bikeNumber
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      await createDriver(driverData);

      alert("Driver Added Successfully 🚀");

      setDriverData({
        name: "",
        phone: "",
        bikeNumber: "",
      });

      fetchDrivers();

    } catch (error) {

      console.log(error);

      alert("Failed To Add Driver ❌");

    }
  };

  const handleDeleteDriver = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this driver?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDriver(id);

      fetchDrivers();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <AdminLayout>
      <div className="text-white p-6">

        <h1 className="text-3xl font-bold mb-8">
          Drivers Management
        </h1>

        {/* Add Driver */}

        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Add Driver
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Driver Name"
              value={driverData.name}
              onChange={(e) =>
                setDriverData({
                  ...driverData,
                  name: e.target.value,
                })
              }
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={driverData.phone}
              onChange={(e) =>
                setDriverData({
                  ...driverData,
                  phone: e.target.value,
                })
              }
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Bike Number"
              value={driverData.bikeNumber}
              onChange={(e) =>
                setDriverData({
                  ...driverData,
                  bikeNumber: e.target.value,
                })
              }
              className="bg-black border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>

          <button
            onClick={handleAddDriver}
            className="mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-xl font-bold"
          >
            Add Driver
          </button>

        </div>

        {/* Drivers Table */}

        <div className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-black border-b border-gray-800">

              <tr>

                <th className="px-4 py-4 text-left">
                  Driver Name
                </th>

                <th className="px-4 py-4 text-left">
                  Phone
                </th>

                <th className="px-4 py-4 text-left">
                  Bike Number
                </th>

                <th className="px-4 py-4 text-left">
                  Status
                </th>

                <th className="px-4 py-4 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {drivers.map((driver) => (

                <tr
                  key={driver._id}
                  className="border-b border-gray-800 hover:bg-[#1a1a1a]"
                >

                  <td className="px-4 py-4">
                    {driver.name}
                  </td>

                  <td className="px-4 py-4">
                    {driver.phone}
                  </td>

                  <td className="px-4 py-4">
                    {driver.bikeNumber}
                  </td>

                  <td className="px-4 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold
                      ${
                        driver.status === "Available"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {driver.status}
                    </span>

                  </td>

                  <td className="px-4 py-4">

                    <button
                      onClick={() =>
                        handleDeleteDriver(
                          driver._id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Drivers;