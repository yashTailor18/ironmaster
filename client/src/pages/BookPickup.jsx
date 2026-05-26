import { useState } from "react";
import axios from "axios";

function BookPickup() {

  // FORM STATE
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    pickupDate: "",
  });

  // SUCCESS MESSAGE STATE
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async () => {

    // VALIDATION
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.service ||
      !formData.pickupDate
    ) {

      alert("Please fill all fields");

      return;
    }

    try {

      // API CALL
      const response = await axios.post(
        "http://localhost:5000/api/bookings/create",
        formData
      );

      console.log(response.data);

      // SUCCESS MESSAGE
      setBookingSuccess(true);

      alert(response.data.message);

      // CLEAR FORM
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        pickupDate: "",
      });

    } catch (error) {

      console.log(error);

      alert("Booking Failed ❌");

    }

  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-gray-500 uppercase tracking-[6px] mb-5">
          Book Pickup
        </p>

        <h1 className="text-5xl md:text-6xl font-bold">
          Schedule Your Laundry Pickup
        </h1>

        <p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8">
          Experience premium laundry & ironing service with fast pickup and doorstep delivery.
        </p>

      </div>

      {/* SUCCESS MESSAGE */}
      {
        bookingSuccess && (
          <div className="bg-green-500 text-white px-6 py-4 rounded-2xl mb-10 text-center max-w-2xl mx-auto font-semibold">

            Your Booking Has Been Confirmed Successfully 🚀

          </div>
        )
      }

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE FORM */}
        <div className="lg:col-span-2 bg-[#111111] border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-10">
            Pickup Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white"
            />

            {/* PHONE */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white md:col-span-2"
            />

            {/* ADDRESS */}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Pickup Address"
              rows="4"
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white md:col-span-2"
            ></textarea>

            {/* SERVICE */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white"
            >

              <option value="">Select Service</option>

              <option value="Laundry Washing">
                Laundry Washing
              </option>

              <option value="Steam Ironing">
                Steam Ironing
              </option>

              <option value="Dry Cleaning">
                Dry Cleaning
              </option>

            </select>

            {/* DATE */}
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-white"
            />

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-300 transition duration-300"
          >
            Confirm Booking
          </button>

        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 h-fit">

          <h2 className="text-3xl font-bold mb-10">
            Order Summary
          </h2>

          <div className="space-y-8">

            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="text-gray-400">Service</span>
              <span>{formData.service || "Not Selected"}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="text-gray-400">Pickup Date</span>
              <span>{formData.pickupDate || "Not Selected"}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="text-gray-400">Delivery</span>
              <span>24 Hours</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-4">
              <span className="text-gray-400">Estimated Price</span>
              <span>₹299</span>
            </div>

            {/* FEATURES */}
            <div className="space-y-4 pt-6">

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p className="text-gray-400">
                  Premium Fabric Care
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p className="text-gray-400">
                  Doorstep Pickup & Delivery
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p className="text-gray-400">
                  Fast 24H Service
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookPickup;