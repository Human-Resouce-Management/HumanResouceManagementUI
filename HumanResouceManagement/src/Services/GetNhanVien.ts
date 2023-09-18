import axios from "axios";
import {NhanVien} from '../Models/Dtos/NhanVienDto'
export const fetchData = async () => {

  let data = <any><any>[]
  try {
    const respons = await axios.get("https://localhost:7141/api/NhanVien");
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};