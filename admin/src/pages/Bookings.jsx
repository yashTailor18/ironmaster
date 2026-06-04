import { useEffect, useState } from "react";

import {
  getAllBookings,
  updateBookingStatus,
  assignDriver,
} from "../services/bookingService";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getAllBookings();
        setBookings(data.bookings);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  const handleAssignDriver = async (booking) => {
    try {
      await assignDriver(booking._id, {
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
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        All Bookings
      </h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Service</th>
            <th>Status</th>
            <th>Driver Name</th>
            <th>Driver Phone</th>
            <th>Bike Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>

              <td>{booking.orderId}</td>

              <td>{booking.fullName}</td>

              <td>{booking.service}</td>

              <td>
                <select
                  value={booking.orderStatus}
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

              <td>
                <input
                  type="text"
                  placeholder="Driver Name"
                  defaultValue={booking.driverName}
                  onChange={(e) => {
                    booking.driverName =
                      e.target.value;
                  }}
                />
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Driver Phone"
                  defaultValue={booking.driverPhone}
                  onChange={(e) => {
                    booking.driverPhone =
                      e.target.value;
                  }}
                />
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Bike Number"
                  defaultValue={booking.bikeNumber}
                  onChange={(e) => {
                    booking.bikeNumber =
                      e.target.value;
                  }}
                />
              </td>

              <td>
                <button
                  onClick={() =>
                    handleAssignDriver(
                      booking
                    )
                  }
                >
                  Assign Driver
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Bookings;