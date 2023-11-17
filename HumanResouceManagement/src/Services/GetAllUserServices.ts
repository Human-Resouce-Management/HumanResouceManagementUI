import axios from "axios";
import { axiosInstance } from "./axiosConfig";
import {User} from '../Models/Usermodel'
export const fetchData = async () => {
const loginUrl = 'UserManagement/GetAll'
  let data = <any><any>[]
  try {
    const respons = await axiosInstance.get(loginUrl);
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};

