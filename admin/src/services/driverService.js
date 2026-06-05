import axios from "axios";

const API_URL =
  "http://localhost:5000/api/drivers";

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