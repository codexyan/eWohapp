import axios from "axios";
const apiBaseURL = "https://fakestoreapi.com/products";

export const fecthData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error Fetching data : ", error);
    return [];
  }
};

export const getProducts = async (callback) => {
  return await fecthData(apiBaseURL);
};
export const getDetailProduct = async (id, callback) => {
  return await fecthData(`${apiBaseURL}/${id}`);
};
