import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL || "https://ironmaster-7qg4.vercel.app"}/api/drivers`;

export const getDrivers = async () => {
  const response = await axios.get(
    `${API_URL}/all`
  );

  return response.data;
};

export const createDriver = async (
  driverData
) => {
  const response = await axios.post(
    `${API_URL}/create`,
    driverData
  );

  return response.data;
};

export const deleteDriver = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};