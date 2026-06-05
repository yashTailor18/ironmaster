import { getDrivers } from "../services/driverService";
import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
  getAllBookings,
  updateBookingStatus,
  assignDriver,
} from "../services/bookingService";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [drivers, setDrivers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getAllBookings();
        setBookings(data.bookings);
      } catch (error) {
        console.log(error);
      }
    };
  const fetchDrivers = async () => {
    try {
      const data = await getDrivers();
      setDrivers(data.drivers);
    } catch (error) {
      console.log(error);
    }
  };
    fetchDrivers();
    fetchBookings();
  }, []);
const filteredBookings = bookings.filter((booking) => {

  const matchesSearch =
    booking.orderId
      ?.toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    booking.fullName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All"
      ? true
      : booking.orderStatus === statusFilter;

  return matchesSearch && matchesStatus;
});
  const handleAssignDriver = async (booking) => {
    try {
      await assignDriver(booking._id, {
        driverId: booking.driverId || null,
        driverName: booking.driverName || "",
        driverPhone: booking.driverPhone || "",
        bikeNumber: booking.bikeNumber || "",
      });

      alert("Driver Assigned Successfully 🚀");
    } catch (error) {
      console.log(error);
      alert("Failed To Assign Driver ❌");
    }
  };

  return (
  <AdminLayout>
    <div className="text-white p-2 w-full">

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-2">

  <h1 className="text-3xl font-bold text-white">
    Bookings Management
  </h1>

  <input
    type="text"
    placeholder="Search Order ID or Customer..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="bg-[#111111] border border-gray-700 rounded-2xl px-2  py-2 text-white w-full md:w-[350px]"
  />
  <select
  value={statusFilter}
  onChange={(e) =>
    setStatusFilter(e.target.value)
  }
  className="bg-[#111111] border border-gray-700 rounded-2xl px-4 py-2 text-white"
>
  <option value="All">
    All Status
  </option>

  <option value="Pending">
    Pending
  </option>

  <option value="Picked Up">
    Picked Up
  </option>

  <option value="Processing">
    Processing
  </option>

  <option value="Out For Delivery">
    Out For Delivery
  </option>

  <option value="Delivered">
    Delivered
  </option>
</select>

</div>

      <div className="bg-[#111111] border border-gray-800 rounded-3xl shadow-2xl">

  <table className="w-full  text-white text-sm">
        <thead className="bg-black border-b border-gray-800">
          <tr>
            <th className="px-3 py-4 text-left text-gray-400 font-semibold">
  Order ID
</th>
            <th className="px-3 py-4 text-left text-gray-400 font-semibold">Customer</th>
            <th className="px-3 py-4 text-left text-gray-400 font-semibold">Service</th>
            <th className="px-3 py-4 text-left text-gray-400 font-semibold">Status</th>
            <th className="px-3 py-4 w-44 text-left text-gray-400 font-semibold">
  Driver Name
</th>
            <th className="px-3 py-4 w-48 text-left text-gray-400 font-semibold">
  Driver Phone
</th>
            <th className="px-3 py-4 w-44 text-left text-gray-400 font-semibold">
  Bike Number
</th>
            <th className="px-3 py-4 text-left text-gray-400 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
         

  {filteredBookings.length === 0 && (
    <tr>
      <td
        colSpan="8"
        className="text-center py-10 text-gray-500"
      >
        No bookings found
      </td>
    </tr>
  )}

  {filteredBookings.map((booking) => (
            <tr
  key={booking._id}
  className="border-b border-gray-800 hover:bg-[#1a1a1a] transition"
>

              <td className="px-3 py-4 font-semibold whitespace-nowrap">
  {booking.orderId}
</td>

              <td className="px-3 py-4 whitespace-nowrap">
  {booking.fullName}
</td>

              <td className="px-3 py-4 text-gray-300 whitespace-nowrap">
                {booking.service}
              </td> 

              <td className="px-3 py-4">
                <div
  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2
  ${
    booking.orderStatus === "Pending"
      ? "bg-yellow-500/20 text-yellow-400"
      : booking.orderStatus === "Picked Up"
      ? "bg-blue-500/20 text-blue-400"
      : booking.orderStatus === "Processing"
      ? "bg-purple-500/20 text-purple-400"
      : booking.orderStatus === "Out For Delivery"
      ? "bg-orange-500/20 text-orange-400"
      : "bg-green-500/20 text-green-400"
  }`}
>
  {booking.orderStatus}
</div>
                <select
  value={booking.orderStatus}
  className="bg-black border border-gray-700 rounded-xl px-3 py-2 text-white w-full"
                  onChange={async (e) => {
                    const newStatus = e.target.value;

                    try {
                      await updateBookingStatus(
                        booking._id,
                        newStatus
                      );

                      const updatedBookings =
                        bookings.map((item) =>
                          item._id === booking._id
                            ? {
                                ...item,
                                orderStatus: newStatus,
                              }
                            : item
                        );

                      setBookings(updatedBookings);

                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Picked Up">
                    Picked Up
                  </option>

                  <option value="Processing">
                    Processing
                  </option>

                  <option value="Out For Delivery">
                    Out For Delivery
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>
                </select>
              </td>

              <td className="px-3 py-4">

  <select
    className="bg-black border border-gray-700 rounded-xl px-3 py-2 text-white w-full mb-2"
    onChange={(e) => {

      const selectedDriver = drivers.find(
        (driver) => driver._id === e.target.value
      );

      if (selectedDriver) {
        booking.driverId = selectedDriver._id;

        booking.driverName = selectedDriver.name;
        booking.driverPhone = selectedDriver.phone;
        booking.bikeNumber = selectedDriver.bikeNumber;

        setBookings([...bookings]);

      }
    }}
  >
    <option value="">
      Select Driver
    </option>

    {drivers
  .filter(
    (driver) =>
      driver.status === "Available"
  )
  .map((driver) => (
      <option
        key={driver._id}
        value={driver._id}
      >
        {driver.name}
      </option>
    ))}
  </select>

  <input
    type="text"
    value={booking.driverName || ""}
    className="bg-black border border-gray-700 rounded-xl px-3 py-2 text-white w-full"
    readOnly
  />

</td>

  <td className="px-3 py-4">
  <input
    type="text"
    value={booking.driverPhone || ""}
    className="bg-black border border-gray-700 rounded-xl px-3 py-2 text-white w-full"
    readOnly
  />
</td>

              <td className="px-3 py-4">
  <input
    type="text"
    value={booking.bikeNumber || ""}
    className="bg-black border border-gray-700 rounded-xl px-3 py-2 text-white w-full"
    readOnly
  />
</td>

              <td className="px-3 py-4">
  <button
    onClick={() => handleAssignDriver(booking)}
    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition-all"
  >
    Assign Driver
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

export default Bookings;