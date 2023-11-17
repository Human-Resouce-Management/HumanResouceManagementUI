import axios from "axios";
import { axiosInstance } from "../axiosConfig";
import { ChucVu } from "@/Models/Dtos/ChucVuDto";
export const fetchData3 = async () => {
const loginUrl = 'ChucVu'
  let data = <any><any>[]
  try {
    const respons = await axiosInstance.get(loginUrl);
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};

