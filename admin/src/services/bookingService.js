import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

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
    `http://localhost:5000/api/bookings/assign-driver/${id}`,
    driverData
  );

  return response.data;
};