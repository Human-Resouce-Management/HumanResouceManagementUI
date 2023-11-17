import axios from "axios";
import { axiosInstance } from "./axiosConfig";
import {NhanVien} from '../Models/Dtos/NhanVienDto'
export const fetchData = async () => {

  let data = <any><any>[]
  try {
    const respons = await axiosInstance.get("NhanVien");
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};