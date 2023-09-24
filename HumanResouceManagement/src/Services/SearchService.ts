import axios from "axios";
import { ref, watch } from "vue";
import { axiosInstance } from "../Services/axiosConfig";
import type { User } from "@/Models/Usermodel";
import type { SearchRequest } from "@/Models/Request/SearchModels/SearchRequest";
import { LoginViewModel } from "@/Models/LoginViewModel";

export const fetchData2 = async (model: SearchRequest): Promise<User[]> => {
  let data2 = [] as User[];
  try {
    const response = await axiosInstance.post("UserManagement/search", model);
    data2 = response.data.data.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error:", error);
  }
  return data2;
};