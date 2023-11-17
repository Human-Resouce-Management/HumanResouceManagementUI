import axios from "axios";
import { axiosInstance } from "../axiosConfig";
export const fetchDataBoPhan = async () => {

  let data = <any><any>[]
  try {
    const respons = await axiosInstance.get("BoPhan");
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};