import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://ironmaster-7qg4.vercel.app";
const API_URL = `${BASE_URL}/api/bookings`;

export const getAllBookings = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};

export const updateBookingStatus = async (
  id,
  orderStatus
) => {
  const response = await axios.put(
    `${API_URL}/status/${id}`,
    { orderStatus }
  );

  return response.data;
};
export const assignDriver = async (
  id,
  driverData
) => {

  const response = await axios.put(
    `${BASE_URL}/api/bookings/assign-driver/${id}`,
    driverData
  );

  return response.data;
};