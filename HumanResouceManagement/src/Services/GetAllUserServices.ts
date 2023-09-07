import axios from "axios";
import {User} from '../Models/Usermodel'
export const fetchData = async () => {

  let data = <any><any>[]
  try {
    const respons = await axios.get("https://localhost:7141/api/UserManagement/GetAll");
    data= respons.data.data;
  } catch (error) {
    console.error("Error:", error);
  }
  return data
};

